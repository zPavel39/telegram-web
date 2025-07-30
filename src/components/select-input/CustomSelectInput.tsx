import React, { useEffect, useRef } from 'react'
import { Dropdown } from 'primereact/dropdown'

interface ICustomSelectInputProps {
	options: { key: string; value: string }[]
	selected: string | null
	onSelect: (key: string) => void
	placeholder?: string
	showError?: boolean
	title?: string
}

const CustomSelectInput: React.FC<ICustomSelectInputProps> = ({
	options,
	selected,
	onSelect,
	placeholder,
}) => {
	const containerRef = useRef<HTMLDivElement>(null)

	const handleSelect = (key: string) => {
		onSelect(key)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div className='field' ref={containerRef}>
			<Dropdown
				value={selected || ''}
				options={options.map(({ key, value }) => ({
					label: value,
					value: key,
				}))}
				onChange={e => handleSelect(e.value)}
				placeholder={placeholder || 'Выберите статус'}
				className='p-dropdown-sm'
				style={{ width: '100%' }}
			/>
		</div>
	)
}

export default CustomSelectInput
