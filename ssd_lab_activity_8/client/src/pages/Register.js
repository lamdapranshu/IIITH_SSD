import { useState } from 'react'
//import { useHistory } from 'react-router-dom'

function App() {
	// const history = useHistory()

	const [roll, setName] = useState('')
	const [password, setEmail] = useState('')
	const [role, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				roll,
				password,
				role,
			}),
		})

		const data = await response.json()
		console.log(response);
		if(data.status === 'ok')
		{
			history.push('/login');
		}
		// if (data.status === 'ok') {
		// 	history.push('/login')
		// }
	}

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={roll}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="roll"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setEmail(e.target.value)}
					type="password"
					placeholder="password"
				/>
				<br />
				<input
					value={role}
					onChange={(e) => setPassword(e.target.value)}
					type="text"
					placeholder="rol"
				/>
				<br />
				<input type="submit" value="Register" />
			</form>
		</div>
	)
}

export default App