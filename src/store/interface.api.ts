export interface IErrorPayload {
	code: number | string
	message: string
	errors?: Record<string, string[] | string>
}

export interface ISuggestResponse {
	items: ISuggest[] | []
	page_number: number
	page_size: number
}

export interface ISuggest {
	id: number
	title: string
}
