import { useToggle } from './hooks/useToggle'
import './App.css'

function App() {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

	return (
		<div>
			<h4 className='title'>{value.toString()}</h4>

			<button onClick={() => toggle()}>Toggle</button>
			<button onClick={() => toggle('cyan')}>Set Cyan</button>
		</div>
	)
}

export default App
