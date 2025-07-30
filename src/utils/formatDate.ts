export const formatDate = (dateString: string) => {
	const months = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
	]

	const date = new Date(dateString) // Преобразуем строку в объект Date

	const day = String(date.getDate()).padStart(2, '0') // День с ведущим нулем
	const month = months[date.getMonth()] // Месяц в формате MM
	const year = String(date.getFullYear()).slice(-2) // Сокращенный год (последние 2 цифры)

	const hours = String(date.getHours()).padStart(2, '0') // Часы с ведущим нулем
	const minutes = String(date.getMinutes()).padStart(2, '0') // Минуты с ведущим нулем
	const seconds = String(date.getSeconds()).padStart(2, '0') // Секунды с ведущим нулем

	return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}` // Форматируем дату
}
