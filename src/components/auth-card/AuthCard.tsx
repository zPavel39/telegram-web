import React from 'react'

interface AuthProps {
	authData: {
		user?: {
			id: number
			first_name: string
			last_name?: string
			username?: string
			photo_url?: string
		}
	} | null
}

const AuthCard: React.FC<AuthProps> = ({ authData }) => {
	const user = authData?.user

	return (
		<div style={styles.container}>
			<div style={styles.card}>
				{user?.photo_url ? (
					<img src={user.photo_url} alt='User Avatar' style={styles.avatar} />
				) : (
					<div style={styles.avatarPlaceholder}>
						{user?.first_name?.charAt(0) || '?'}
					</div>
				)}
				<h2 style={styles.name}>
					Добро пожаловать, {user?.first_name} {user?.last_name || ''}
				</h2>
				<p style={styles.username}>@{user?.username || 'Чувак'}</p>
				<p style={styles.id}>Telegram ID: {user?.id}</p>

				<button style={styles.button}>Продолжить</button>
			</div>
		</div>
	)
}

export default AuthCard

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		background: '#f5f5f5',
		padding: '20px',
	},
	card: {
		width: '100%',
		maxWidth: '350px',
		background: '#fff',
		borderRadius: '12px',
		padding: '24px',
		boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
		textAlign: 'center',
	},
	avatar: {
		width: '90px',
		height: '90px',
		borderRadius: '50%',
		objectFit: 'cover',
		marginBottom: '12px',
	},
	avatarPlaceholder: {
		width: '90px',
		height: '90px',
		borderRadius: '50%',
		backgroundColor: '#ddd',
		color: '#555',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '32px',
		fontWeight: 'bold',
		margin: '0 auto 12px',
	},
	name: {
		fontSize: '18px',
		margin: '6px 0',
	},
	username: {
		fontSize: '14px',
		color: '#777',
		margin: '4px 0',
	},
	id: {
		fontSize: '12px',
		color: '#999',
		marginBottom: '20px',
	},
	button: {
		width: '100%',
		backgroundColor: '#2AABEE',
		color: '#fff',
		padding: '10px 0',
		border: 'none',
		borderRadius: '8px',
		fontSize: '16px',
		cursor: 'pointer',
	},
}
