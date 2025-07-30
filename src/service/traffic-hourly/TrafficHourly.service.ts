import { instance } from '../../api/axios'

export interface ITrafficHourly {
	payment_method_id: number
	payment_method_name: string
	items: {
		amount_from: string | null
		amount_to: string | null
		total_count: number
		total_amount: string
	}[]
}

/* const data: ITrafficHourly[] = [
	{
		payment_method_id: 1,
		payment_method_name: 'Карта',
		items: [
			{
				amount_from: '7001',
				amount_to: '8000',
				total_count: 2,
				total_amount: '15500',
			},
			{
				amount_from: '10001',
				amount_to: null,
				total_count: 2,
				total_amount: '40000',
			},
			{
				amount_from: null,
				amount_to: '10001',
				total_count: 2,
				total_amount: '40000',
			},
			{
				amount_from: '1001',
				amount_to: '10001',
				total_count: 2,
				total_amount: '40000',
			},
			{
				amount_from: '7001',
				amount_to: '8000',
				total_count: 2,
				total_amount: '15500',
			},
			{
				amount_from: '10001',
				amount_to: null,
				total_count: 2,
				total_amount: '40000',
			},
			{
				amount_from: null,
				amount_to: '10001',
				total_count: 2,
				total_amount: '40000',
			},
			{
				amount_from: '1001',
				amount_to: '10001',
				total_count: 2,
				total_amount: '40000',
			},
			{
				amount_from: '7001',
				amount_to: '8000',
				total_count: 2,
				total_amount: '15500',
			},
			{
				amount_from: '10001',
				amount_to: null,
				total_count: 2,
				total_amount: '40000',
			},
			{
				amount_from: null,
				amount_to: '10001',
				total_count: 2,
				total_amount: '40000',
			},
			{
				amount_from: '1001',
				amount_to: '10001',
				total_count: 2,
				total_amount: '40000',
			},
		],
	},
	{
		payment_method_id: 2,
		payment_method_name: 'СБП',
		items: [
			{
				amount_from: '9001',
				amount_to: '10000',
				total_count: 1,
				total_amount: '10000',
			},
		],
	},
	{
		payment_method_id: 2,
		payment_method_name: 'QR',
		items: [
			{
				amount_from: '9001',
				amount_to: '10000',
				total_count: 2,
				total_amount: '10000',
			},
		],
	},
] */

export const TrafficHourlyService = {
	getTrafficHourly: async () => {
		const response = await instance.get(`/trader/ui/reports/traffic-hourly`)
		// return data
		return response.data
	},
}
