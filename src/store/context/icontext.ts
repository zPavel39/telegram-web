import { ReactNode } from 'react'

export interface IAuthContextType {
	getAuth: (data: IAuthData) => Promise<void>
	logout: () => void
	user: string | null
}
export interface IAuthData {
	login: string
	password: string
}

export interface IAuthProviderProps {
	children: ReactNode
}

export interface IToastContext {
	showToast: (
		severity: 'success' | 'info' | 'warn' | 'error',
		summary: string,
		detail: string
	) => void
}
