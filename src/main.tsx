import { PrimeReactProvider } from 'primereact/api'
import { createRoot } from 'react-dom/client'

import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import './index.css'

import { Provider } from 'react-redux'
import App from './app/App.tsx'
import RouterApp from './app/Router-app.tsx'
import { AuthProvider } from './store/context/auth-context/authContext.tsx'
import { ToastProvider } from './store/context/toast-context/ToastContex.tsx'
import { store } from './store/redux/store.ts'
import { ThemeProvider } from './store/context/theme/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<ThemeProvider>
			<ToastProvider>
				<AuthProvider>
					<PrimeReactProvider>
						<RouterApp>
							<App />
						</RouterApp>
					</PrimeReactProvider>
				</AuthProvider>
			</ToastProvider>
		</ThemeProvider>
	</Provider>
)
