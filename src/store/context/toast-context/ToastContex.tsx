import React, { createContext, useRef, useContext, useEffect } from 'react'
import { Toast } from 'primereact/toast'
import { setToastFunction } from '../../../service/toast.service'
import { IToastContext } from '../icontext'

const ToastContext = createContext<IToastContext | null>(null)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const toastRef = useRef<Toast | null>(null)

	const showToast = (
		severity: 'success' | 'info' | 'warn' | 'error',
		summary: string,
		detail: string
	) => {
		if (toastRef.current) {
			toastRef.current.show({ severity, summary, detail })
		}
	}

	useEffect(() => {
		setToastFunction(showToast)
		return () => {
			if (toastRef.current) {
				toastRef.current.clear()
			}
		}
	}, [])

	return (
		<ToastContext.Provider value={{ showToast }}>
			<Toast ref={toastRef} />
			{children}
		</ToastContext.Provider>
	)
}

export const useToast = () => {
	const context = useContext(ToastContext)
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider')
	}
	return context
}
