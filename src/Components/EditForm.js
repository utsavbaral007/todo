import React, { useState, useContext } from 'react'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import { Context } from '../context/ContextProvider'

export default function EditForm(props) {
	const { editTask } = useContext(Context)
	const [title, setTitle] = useState('')
	console.log(props.id)
	const handleUpdate = (e) => {
		e.preventDefault()
		editTask({ title }, props.id)
		window.location.reload(true)
	}

	return (
		<div className="todo-edit-form">
			<Form.Group onSubmit={handleUpdate}>
				<Form.Control
					onChange={(e) => setTitle(e.target.value)}
					id={props.id}
					type="text"
					defaultValue={props.value}
				/>
				<Button
					onClick={handleUpdate}
					style={{ width: '45%', marginTop: '15px' }}
					variant="primary"
				>
					Edit
				</Button>
				<Button
					style={{ width: '45%', marginTop: '15px', marginLeft: '10%' }}
					onClick={props.handleClose}
					variant="danger"
				>
					Close
				</Button>
			</Form.Group>
		</div>
	)
}
