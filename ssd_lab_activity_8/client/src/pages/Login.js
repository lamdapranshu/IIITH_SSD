import { useState } from 'react'
//import { useHistory } from 'react-router-dom'

function App() {
	// const history = useHistory()

	const [roll, setName] = useState('')
	const [password, setEmail] = useState('')
	

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				roll,
				password
			}),
		})

		const data = await response.json()
		console.log(data);
		if(data.user){
			alert('Login Successful')
			window.location.href = '/dashboard'

		}
		else
		{
			alert('Please check your username and password')
		}
		// if (data.status === 'ok') {
		// 	history.push('/login')
		// }
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
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

				<input type="submit" value="Register" />
			</form>
		</div>
	)
}

export default App