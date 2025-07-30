import { useEffect, useState } from 'react'
import AuthCard from '../../components/auth-card/AuthCard'

const MainPage = () => {
	const [authData, setAuthData] = useState<any>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	// 	берем window.Telegram.WebApp.initData.

	// отправляем на сервер (fetch POST).

	// проверяем подпись по инструкции Telegram.

	// если валидно → считаем пользователя авторизованным
	useEffect(() => {
		const tg = (window as any).Telegram?.WebApp

		if (tg?.initData) {
			fetch('https://webhook.site/214eb4ce-19f1-4f52-aeb6-1ddcc18bdf1e', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ initData: tg.initData }),
			})
				.then(res => res.json())
				.then(data => {
					if (data.ok) {
						// После авторизации получаем данные с бэка
						return fetch(
							'https://webhook.site/214eb4ce-19f1-4f52-aeb6-1ddcc18bdf1e'
						)
					} else {
						throw new Error('Ошибка авторизации')
					}
				})
				.then(res => res.json())
				.then(userData => setAuthData(userData))
				.catch(err => setError(err.message))
				.finally(() => setLoading(false))
		}
	}, [])

	if (loading) return <p>Авторизация...</p>
	if (error) return <p>Ошибка: {error}</p>

	return (
		<div>
			<AuthCard authData={authData} />
		</div>
	)
}

export default MainPage
