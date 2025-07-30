import { useEffect, useState } from 'react'

export function useTelegram() {
	const tg = (window as any).Telegram?.WebApp

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}

	useEffect(() => {
		tg.ready()
	}, [tg])

	return {
		tg,
		user: tg?.initDataUnsafe?.user,
		onToggleButton,
	}
}
