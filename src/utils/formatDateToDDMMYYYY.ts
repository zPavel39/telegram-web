export const formatDateToDDMMYYYY = (dateString: string): string => {
	if (!dateString) return ''

	const [year, month, day] = dateString.split('-')
	return `${day}.${month}.${year}`
}

export const formatDateToMMYYYY = (dateString: string): string => {
	if (!dateString) return ''

	const [year, month] = dateString.split('-')
	return `${month}.${year}`
}
