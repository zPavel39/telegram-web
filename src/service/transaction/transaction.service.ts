import { instance } from '../../api/axios'

export interface IPeriod {
	date_from?: string
	date_to?: string
}

export const TransactionService = {
	getTransaction: async () => {
		const response = await instance.get(
			'/trader/ui/transactions/?page_number=1&page_size=1'
		)
		return response.data.items
	},
	getExportTransaction: async (period: IPeriod) => {
		const params = new URLSearchParams()

		if (period.date_from) params.append('date_from', period.date_from)
		if (period.date_to) params.append('date_to', period.date_to)

		const url =
			'/trader/ui/transactions/export' +
			(params.toString() ? `?${params.toString()}` : '')

		return await instance.get(url, {
			responseType: 'blob',
			validateStatus: () => true,
		})
	},
}
