export const formatCurrency = (value: string | number): string => {
	const numericValue = typeof value === 'string' ? parseFloat(value) : value
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(numericValue || 0)
}

export const formatCurrencyWithoutSymbol = (value: string | number): string => {
	const numericValue = typeof value === 'string' ? parseFloat(value) : value
	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(numericValue || 0)
}
