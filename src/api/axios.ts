import axios, { CreateAxiosDefaults } from 'axios'
import { getContentType } from './api.helper'

import authService from '../service/auth/auth.service'
import {
	getAccessToken,
	getRefreshToken,
	removeFromStorage,
} from '../service/auth/auth.helper'
import { baseUrl } from './api'

const axiosOptions: CreateAxiosDefaults = {
	baseURL: baseUrl(),
	headers: getContentType(),
	withCredentials: false,
}

export const axiosClassic = axios.create(axiosOptions)

export const instance = axios.create(axiosOptions)

instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()
	if (config?.headers && accessToken)
		config.headers.Authorization = `${accessToken}`

	return config
})

instance.interceptors.response.use(
	response => response, // если запрос успешен, просто возвращаем его
	async error => {
		const originalRequest = error.config
		const status = error?.response?.status
		if (status === 401 && !originalRequest._isRetry) {
			originalRequest._isRetry = true

			const refreshToken = getRefreshToken()
			if (refreshToken) {
				try {
					const response = await authService.getNewTokensByRefresh(refreshToken)

					if (response?.data?.access_token) {
						originalRequest.headers.Authorization = `${response.data.access_token}`
						return instance(originalRequest) // повторно выполняем запрос
					} else {
						// если не получили токен
						throw error
					}
				} catch (error) {
					removeFromStorage() // чистим хранилище
					setTimeout(() => {
						window.location.replace('/login')
					}, 1500)
					throw error
				}
			} else {
				removeFromStorage()
				setTimeout(() => {
					window.location.replace('/login')
				}, 1500)
			}
		}
		throw error
	}
)
