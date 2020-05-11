import React, { useState, useContext } from 'react'
import { Table, Modal, Button } from 'react-bootstrap'
import '../App.css'
import { Context } from '../context/ContextProvider'
import EditForm from './EditForm'

export default function Todo(props) {
	const { deleteTask } = useContext(Context)

	const [deleteId, setDeleteId] = useState('')
	const [showModal, setShowModal] = useState(false)
	const handleShow = () => setShowModal(true)
	const handleHide = () => setShowModal(false)

	const [editModal, setEditModal] = useState(false)
	const handleShowEdit = () => setEditModal(true)
	const handleHideEdit = () => setEditModal(false)

	const handleDelete = (id) => {
		deleteTask(id, handleHide)
		window.location.reload(true)
	}
	return (
		<div className="todo-table">
			<Modal show={editModal} onHide={handleHideEdit}>
				<Modal.Header closeButton>Edit</Modal.Header>
				<Modal.Body>
					<EditForm
						handleClose={handleHideEdit}
						id={props.id}
						value={props.title}
					/>
				</Modal.Body>
			</Modal>
			<Table striped bordered hover>
				<tbody>
					<tr key={props.id}>
						<td style={{ width: '60%' }}>{props.title}</td>
						<td>
							<i
								className="far fa-edit"
								id="edit-icon"
								onClick={handleShowEdit}
							></i>
						</td>
						<td>
							<i
								onClick={() => {
									handleShow()
									setDeleteId(props.id)
								}}
								className="fas fa-minus-circle"
								id="delete-icon"
							></i>
						</td>
					</tr>
				</tbody>
			</Table>
			<Modal show={showModal} onHide={handleHide}>
				<Modal.Header closeButton>
					<Modal.Title>Are You Sure?</Modal.Title>
				</Modal.Header>
				<Modal.Body>{props.title}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleHide}>
						Close
					</Button>
					<Button variant="danger" onClick={() => handleDelete(deleteId)}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
