import React from 'react'
import './App.css'
import Header from './Components/Header'
import TodoForm from './Components/TodoForm'
import Todos from './Components/Todos'
import { ContextProvider } from './context/ContextProvider'

function App() {
	return (
		<ContextProvider>
			<div className="Container">
				<Header />
				<TodoForm />
				<Todos />
			</div>
		</ContextProvider>
	)
}

export default App
