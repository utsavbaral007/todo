import React, { useState, useContext } from 'react'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import { Context } from '../context/ContextProvider'

export default function TodoForm() {
	const [title, setTitle] = useState('')
	const { addTask } = useContext(Context)

	const handleSave = (e) => {
		e.preventDefault()
		addTask({ title })
	}

	return (
		<div className="todo-form">
			<Form onSubmit={handleSave}>
				<Form.Group>
					<Form.Control
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						placeholder="Enter Task"
					/>
				</Form.Group>
			</Form>
			<Button
				onClick={handleSave}
				style={{ width: '50%' }}
				type="submit"
				variant="primary"
			>
				Add
			</Button>
		</div>
	)
}
