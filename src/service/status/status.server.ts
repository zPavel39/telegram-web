import { instance } from '../../api/axios'

export const statusService = {
	getStatus: async () => {
		const response = await instance.get('/trader/ui/status')
		return response.data
	},

	setOffline: async () => {
		const response = await instance.post('/trader/ui/set-offline')
		return response.data
	},

	setOnline: async () => {
		const response = await instance.post('/trader/ui/set-online')
		return response.data
	},
}
