import React, { useContext } from 'react'
import Todo from './Todo'
import { Context } from '../context/ContextProvider'

export default function Todos() {
	const { tasks } = useContext(Context)
	return (
		<div>
			{tasks.map((task) => (
				<Todo title={task.title} id={task._id} />
			))}
		</div>
	)
}
