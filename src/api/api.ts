import { getAccessToken } from '../service/auth/auth.helper'

export const token = () => getAccessToken()
export const serverAuth = () => import.meta.env.VITE_SERVER_AUTH
export const serverDan = (path1: string, path2: string) =>
	`${__ENV.VITE_SERVER_API}${path1}/${path2}`

export const baseUrl = () => __ENV.VITE_SERVER_API
export const project_url = () => __ENV.VITE_PROJECT_URL
export const project_name = __ENV.VITE_PROJECT_NAME
