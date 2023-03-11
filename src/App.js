import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'

function App() {
	const [token, { setItem, removeItem }] = useLocalStorage('token')

	return (
		<div>
			<h4>Твой токен: {token}</h4>

			<button onClick={() => setItem('token')}>Задать токен</button>
			<button onClick={removeItem}>Удалить токен</button>
		</div>
	)
}

export default App
