import React, { useState, useRef, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import { ListBox } from 'primereact/listbox'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { classNames } from 'primereact/utils'

interface IList {
	id: number
	title: string
}

interface IСustomSelectInputProps {
	list: IList[]
	selected: IList | null
	activeItem?: string | null
	onSelect: (e: any) => void
	onSearch: (query: string) => void
	placeholder?: string
	loading?: boolean
	showError?: boolean
	loadMore?: () => void
	title: string
}

const CustomSelectInputSearch: React.FC<IСustomSelectInputProps> = ({
	title,
	list,
	selected,
	onSelect,
	onSearch,
	activeItem,
	placeholder = 'Выберите Банк',
	loading = false,
	showError = false,
	loadMore,
}) => {
	const [showListBox, setShowListBox] = useState(false)
	// const [searchValue, setSearchValue] = useState('')
	const containerRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const [inputValueChange, setInputValueChange] = useState(
		selected?.title || ''
	)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValueChange(e.target.value)
		const query = e.target.value
		// setSearchValue(query)
		onSearch(query) // Вызов поиска
		setShowListBox(true)
	}

	const handleSelect = (e: any) => {
		console.log(selected)
		setInputValueChange(selected?.title ?? '')
		onSelect(e.value)
		setShowListBox(false)
	}

	const handleFocus = () => {
		onSearch('')
		setShowListBox(true)
	}

	// подгрузка при скроле
	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const bottom =
			e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
			e.currentTarget.clientHeight + 1
		if (bottom && loadMore && !loading) {
			loadMore()
		}
	}

	// закрытие при клике вне компонента
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setShowListBox(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	useEffect(() => {
		setInputValueChange(activeItem || '')
	}, [activeItem])

	return (
		<>
			<label htmlFor='bank_id' className='font-bold'>
				{title}
			</label>
			<div>
				<IconField iconPosition='right' className='custom-icon-field'>
					<InputText
						id='bank_id'
						ref={inputRef}
						value={inputValueChange}
						onChange={handleInputChange}
						placeholder={placeholder}
						onFocus={handleFocus}
						autoComplete='off'
						className={classNames({
							'p-invalid': showError && !selected,
						})}
					/>
					<InputIcon className='pi pi-search p-input-icon' />
				</IconField>
			</div>

			{showListBox && (
				<ListBox
					value={selected}
					onChange={handleSelect}
					options={list}
					optionLabel='title'
					emptyMessage='Ничего не найдено'
					onScroll={handleScroll}
					style={{
						marginTop: '8px',
						position: 'absolute',
						zIndex: 100,
						width: inputRef.current
							? `${inputRef.current.offsetWidth}px`
							: '100%',
						maxHeight: '200px',
						overflow: 'auto',
					}}
				/>
			)}
		</>
	)
}

export default CustomSelectInputSearch
