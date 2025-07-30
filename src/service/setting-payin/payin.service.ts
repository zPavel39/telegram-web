import { instance } from '../../api/axios'

export const payinService = {
	getPayin: async () => {
		const response = await instance.get('/trader/ui/payin-rates/')
		return response.data
	},
	updatePayin: async (data: any) => {
		const response = await instance.put(
			`/trader/ui/payin-rates/${data.id}`,
			data
		)
		return response.data
	},
}
