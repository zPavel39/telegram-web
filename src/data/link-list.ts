interface ILink {
	name: string
	link: string
	key: string
	group?: ILink[]
}

export const linkList: ILink[] = [
	{
		name: 'Материал',
		link: 'material',
		key: 'material',
		group: [
			/* 	{
				name: 'Владельцы',
				link: 'material/bank_accounts',
				key: 'bank_accounts',
			},
			{
				name: 'Реквизиты',
				link: 'material/bank_requisites',
				key: 'bank_requisites',
			}, */
			{
				name: 'Материал',
				link: 'material/bank_account',
				key: 'bank_account',
			},
		],
	},
	{
		name: 'Ордера',
		link: 'orders',
		key: 'orders',
		group: [
			{
				name: 'Продажа USDT',
				link: 'orders/transactions',
				key: 'transactions',
			},
			{
				name: 'Покупка USDT',
				link: 'orders/my-payouts',
				key: 'my-payouts',
			},
			{
				name: 'Биржа покупки',
				link: 'orders/payouts',
				key: 'payouts',
			},
			{
				name: 'Автоматика',
				link: 'orders/messages',
				key: 'messages',
			},
		],
	},
	{
		name: 'Отчеты',
		link: 'reports',
		key: 'reports',
		group: [
			{
				name: 'Обороты по дням',
				link: 'reports/turnover_daily',
				key: 'turnover_daily',
			},
			{
				name: 'Обороты по месяцам',
				link: 'reports/turnover_monthly',
				key: 'turnover_monthly',
			},
			{
				name: 'Обороты по реквизитам',
				link: 'reports/turnover_requisites',
				key: 'turnover_requisites',
			},
			{
				name: 'Обороты по реквизитам по дням',
				link: 'reports/turnover_requisites_daily',
				key: 'turnover_requisites_daily',
			},
			/* 	{
				name: 'Трафик',
				link: 'reports/traffic-hourly',
				key: 'traffic-hourly',
			}, */
		],
	},
	{
		name: 'История',
		link: 'history',
		key: 'history',
		group: [
			{
				name: 'Баланс',
				link: 'history/balance_operations',
				key: 'balance_operations',
			},
			{
				name: 'Кошелек',
				link: 'history/wallet_operations',
				key: 'wallet_operations',
			},
		],
	},
	{
		name: 'Система',
		link: 'system',
		key: 'system',
		group: [
			{
				name: 'Сообщения',
				link: 'system/notifications',
				key: 'notifications',
			},
			{
				name: 'Экспорт',
				link: 'system/export',
				key: 'export',
			},
			{
				name: 'Настройки',
				link: 'system/settings',
				key: 'settings',
			},
		],
	},
]
