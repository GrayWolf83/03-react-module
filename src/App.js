import { useHover } from './hooks/useHover'
import './App.css'

function App() {
	const { hovered, ref } = useHover()

	return (
		<div>
			<h4 ref={ref} className='title'>
				{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
			</h4>
		</div>
	)
}

export default App
