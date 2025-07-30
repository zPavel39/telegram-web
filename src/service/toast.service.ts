let toastFunction: (
	severity: 'success' | 'info' | 'warn' | 'error',
	summary: string,
	detail: string
) => void = () => {
	console.warn('Toast is not initialized yet.')
}

/**
 * Устанавливает глобальную функцию для показа уведомлений.
 * Вызывается внутри ToastProvider.
 */
export const setToastFunction = (
	fn: (
		severity: 'success' | 'info' | 'warn' | 'error',
		summary: string,
		detail: string
	) => void
) => {
	toastFunction = fn
}

/**
 * Показывает уведомление через глобальный Toast.
 * Используется в любом месте приложения.
 */
export const showToastService = (
	severity: 'success' | 'info' | 'warn' | 'error',
	summary: string,
	detail: string
) => {
	toastFunction(severity, summary, detail)
}
