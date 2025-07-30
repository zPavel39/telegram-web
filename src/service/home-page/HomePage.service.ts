import { instance } from '../../api/axios'

export type HomePageParams = {
	pageSize?: number
	pageNumber?: number
}

/* const data = [
	{
		date: '2025-04-16',
		total_paid_count: 2,
		total_paid_amount_in_rub: '1751.80',
		total_paid_amount_in_usd: '19.84',
	},
	{
		date: '2025-04-15',
		total_paid_count: 1,
		total_paid_amount_in_rub: '100.00',
		total_paid_amount_in_usd: '1.19',
	},
	{
		date: '2025-04-08',
		total_paid_count: 6,
		total_paid_amount_in_rub: '31350.00',
		total_paid_amount_in_usd: '361.87',
	},
	{
		date: '2025-04-06',
		total_paid_count: 5,
		total_paid_amount_in_rub: '2501.00',
		total_paid_amount_in_usd: '28.91',
	},
	{
		date: '2025-04-04',
		total_paid_count: 10,
		total_paid_amount_in_rub: '38950.60',
		total_paid_amount_in_usd: '453.33',
	},
	{
		date: '2025-03-26',
		total_paid_count: 3,
		total_paid_amount_in_rub: '1500.00',
		total_paid_amount_in_usd: '17.58',
	},
	{
		date: '2025-03-24',
		total_paid_count: 1,
		total_paid_amount_in_rub: '500.00',
		total_paid_amount_in_usd: '5.78',
	},
] */

export const HomePageService = {
	async getCommissionDailyStat() {
		try {
			const response = await instance.get(
				'/trader/ui/reports/transactions-daily-stat'
			)
			return response.data
		} catch (error) {
			throw error
		}
		// return data
	},
}
