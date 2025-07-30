import Cookies from 'js-cookie'

import { EnumTokens } from './auth.service'

export const getAccessToken = () => {
	const accessToken = Cookies.get('access_tokenTrade')
	return accessToken || null
}

export const getRefreshToken = (): string | undefined => {
	const refreshToken = Cookies.get('refresh_tokenTrade')
	return refreshToken
}

export const saveTokenStorage = (
	access_token: string,
	refresh_token: string
) => {
	Cookies.set('access_tokenTrade', access_token, {
		sameSite: 'strict',
		expires: 1, // Хранение на 1 день
	})

	Cookies.set('refresh_tokenTrade', refresh_token, {
		sameSite: 'strict',
		expires: 7, // Хранение на 7 дней
	})
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
	Cookies.remove(EnumTokens.REFRESH_TOKEN)
	localStorage.removeItem('SESSIONS_TIME_TRADER')
	localStorage.removeItem('user')
}
