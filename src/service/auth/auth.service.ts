import { axiosClassic } from '../../api/axios'
import { instance } from '../../api/axios'
import { removeFromStorage, saveTokenStorage } from './auth.helper'

interface IAuthResponse {
	access_token: string
	refresh_token: string
}
interface IFormData {
	login: string
	password: string
}

export enum EnumTokens {
	'ACCESS_TOKEN' = 'access_token',
	'REFRESH_TOKEN' = 'refresh_token',
}

class AuthService {
	async main(type: 'login' | 'register', data: IFormData | null) {
		try {
			const response = await axiosClassic.post<IAuthResponse>(
				`/trader/ui/auth/${type}`,
				data
			)

			if (response.data.access_token)
				saveTokenStorage(
					response.data.access_token,
					response.data.refresh_token
				)

			return response
		} catch (error) {
			throw error
		}
	}

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/trader/auth/access-token'
		)

		if (response.data.access_token && response.data.refresh_token) {
			saveTokenStorage(response.data.access_token, response.data.refresh_token)
		}
		return response
	}

	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/trader/ui/auth/refresh-token',
			{ refresh_token: refreshToken }
		)
		if (response.data.access_token && response.data.refresh_token) {
			saveTokenStorage(response.data.access_token, response.data.refresh_token)
		}
		return response
	}

	async logout() {
		removeFromStorage()
		localStorage.removeItem('user')
		localStorage.removeItem('SESSIONS_TIME_TRADER')
	}

	async generatePassword(password: string) {
		try {
			const response = await instance.post(
				`/trader/ui/auth/generate-password`,
				{ password }
			)
			return response.data
		} catch (error) {
			throw error
		}
	}
}

export default new AuthService()
