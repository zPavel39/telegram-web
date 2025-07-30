import { ReactNode } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import NotFound from '../pages/not-found/NotFound'
import MainPage from '../pages/main-page/MainPage'
import Layout from '../pages/Layout'
interface RouterAppProps {
	children?: ReactNode // Типизация для вложенных компонентов
}

const RouterApp: React.FC<RouterAppProps> = () => {
	return (
		<Router>
			<Routes>
				{/* Главная страница */}
				<Route element={<Layout />}>
					<Route path='/' element={<MainPage />} />

					{/* 404 страница */}
					<Route path='*' element={<NotFound />} />
				</Route>

				{/* 404 для корневых маршрутов */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default RouterApp
