import { instance } from '../../api/axios'

export const balanceService = {
	getBalance: async () => {
		const response = await instance.get('/trader/ui/balance')
		return response.data
	},
}
