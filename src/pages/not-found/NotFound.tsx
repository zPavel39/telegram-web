import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'

const NotFound: React.FC = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/')
	}
	return (
		<>
			<div className='px-5 flex justify-content-center align-items-center mt-7'>
				<div className='border-1 surface-border surface-card border-round py-5 px-4 md:px-7 z-1'>
					<div className='mb-4 flex flex-column align-items-center'>
						<span>Страница не найдена</span>
						<h5>404 Not Found</h5>
						<Button label='На главную' link onClick={() => handleClick()} />
					</div>
				</div>
			</div>
		</>
	)
}

export default NotFound
