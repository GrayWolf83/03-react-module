import { useViewportSize } from './hooks/useViewportSize'
import './App.css'

function App() {
	const { height, width } = useViewportSize()

	return (
		<div>
			<h4 className='title'>
				Width: {width}, height: {height}
			</h4>
		</div>
	)
}

export default App
