import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
	const [visibleRightSidebar, setVisibleRightSidebar] = useState(false)
	const [isSidebarVisible, setSidebarVisible] = useState(false)
	const [isMaskVisible, setMaskVisible] = useState(false)

	const handleMaskClick = () => {
		if (visibleRightSidebar) {
			setVisibleRightSidebar(false)
		}
		setMaskVisible(false)
		setSidebarVisible(false)
	}

	return (
		<div className='layout-container layout-light layout-colorscheme-menu layout-static p-ripple-disabled'>
			<Outlet />
			<div
				className={`layout-mask ${isSidebarVisible ? 'visible' : ''} ${
					isMaskVisible ? 'visibleRight' : ''
				}`}
				onClick={handleMaskClick}
			></div>
		</div>
	)
}

export default Layout
