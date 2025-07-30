import { Toast } from 'primereact/toast'
import React, { createContext, useRef } from 'react'
import authService from '../../../service/auth/auth.service'

import { IAuthContextType, IAuthData, IAuthProviderProps } from '../icontext'
import { useToast } from '../toast-context/ToastContex'

// Типизация для данных авторизации
export const AuthContext = createContext<IAuthContextType>({
	getAuth: async () => {},
	logout: () => {},
	user: null,
})

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
	const toastRef = useRef<Toast | null>(null)
	const { showToast } = useToast()

	const user = localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user')!)
		: null

	const getAuth = async ({ login, password }: IAuthData) => {
		try {
			await authService.main('login', { login, password })
			localStorage.setItem('user', JSON.stringify(login))
			localStorage.setItem(
				'SESSIONS_TIME_TRADER',
				JSON.stringify(Date.now() / 1000)
			)
			showToast('success', 'Успешный вход', 'Вы успешно вошли в систему!')

			setTimeout(() => {
				window.location.replace('/')
			}, 500)
		} catch (error) {
			showToast(
				'error',
				'Ошибка входа',
				'Неверные данные для входа. Попробуйте снова.'
			)
		}
	}

	const logout = async () => {
		await authService.logout()
		if (toastRef.current) {
			showToast('info', 'Выход', 'Вы успешно вышли из системы!')
			setTimeout(() => {
				window.location.replace('/login')
			}, 500)
		}
	}

	return (
		<>
			<Toast ref={toastRef} />
			<AuthContext.Provider value={{ getAuth, user, logout }}>
				{children}
			</AuthContext.Provider>
		</>
	)
}
