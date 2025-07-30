import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeName = 'light' | 'dark' | 'dim'

interface ThemeContextProps {
	theme: ThemeName
	setTheme: (theme: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	setTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setThemeState] = useState<ThemeName>('light')

	const applyTheme = (themeName: ThemeName) => {
		const linkId = 'theme-css'
		let link = document.getElementById(linkId) as HTMLLinkElement

		if (!link) {
			link = document.createElement('link')
			link.rel = 'stylesheet'
			link.id = linkId
			document.head.appendChild(link)
		}

		// путь к файлу в public
		// link.href = `/themes/_layout_${themeName}.scss`
		link.href = `/theme/theme-${themeName}/indigo/theme.css`
	}

	const setTheme = (newTheme: ThemeName) => {
		localStorage.setItem('theme', newTheme)
		setThemeState(newTheme)
		applyTheme(newTheme)
	}

	useEffect(() => {
		const savedTheme = (localStorage.getItem('theme') as ThemeName) || 'light'
		setTheme(savedTheme)
	}, [])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
