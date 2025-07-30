export function formatTimeFromMinutes(totalMinutes: number): string {
	if (!totalMinutes || typeof totalMinutes !== 'number') return '-'

	const hours = Math.floor(totalMinutes / 60)
	const minutes = totalMinutes % 60

	const parts: string[] = []

	if (hours > 0) {
		parts.push(`${hours} ${hours === 1 ? 'час' : hours < 5 ? 'часа' : 'часов'}`)
	}
	if (minutes > 0 || parts.length === 0) {
		parts.push(
			`${minutes} ${
				minutes === 1 ? 'минута' : minutes < 5 ? 'минуты' : 'минут'
			}`
		)
	}

	return parts.join(' ')
}
