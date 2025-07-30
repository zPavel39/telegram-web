// shared/api/axiosBaseQuery.ts
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosRequestConfig, AxiosError } from 'axios'
import { instance } from './axios'

export const axiosBaseQuery =
	(): BaseQueryFn<
		{
			url: string
			method?: AxiosRequestConfig['method']
			data?: AxiosRequestConfig['data']
			params?: AxiosRequestConfig['params']
		},
		unknown,
		unknown
	> =>
	async ({ url, method = 'GET', data, params }) => {
		try {
			const result = await instance({ url, method, data, params })
			return { data: result.data }
		} catch (axiosError) {
			const err = axiosError as AxiosError
			return {
				error: {
					status: err.response?.status || 500,
					data: err.response?.data || err.message,
				},
			}
		}
	}
