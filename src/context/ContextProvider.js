import React, { useState, useEffect } from 'react'
import Axios from 'axios'
export const Context = React.createContext()

export function ContextProvider(props) {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		const getData = async () => {
			const allTasks = await Axios.get('http://127.0.0.1:8080/api/posts')
			console.log(allTasks.data)
			setTasks(allTasks.data)
		}
		getData()
	}, [])

	const addTask = async (taskInfo) => {
		const postData = await Axios.post(
			'http://127.0.0.1:8080/api/newpost',
			taskInfo
		)
		if (postData.data) {
			setTasks([...tasks, postData.data])
		}
	}

	const deleteTask = async (id, handleHide) => {
		const removeTask = await Axios.delete(
			`http://127.0.0.1:8080/api/delete/${id}`
		)
		const deletedTask = tasks.filter((task) => task._id !== removeTask.data._id)
		setTasks(deletedTask)
		console.log(tasks)
		handleHide()
	}

	const editTask = async (taskInfo, id) => {
		const editedTask = await Axios.patch(
			`http://127.0.0.1:8080/api/edit/${id}`,
			taskInfo
		)
		setTasks([editedTask.data])
	}
	return (
		<Context.Provider value={{ tasks, addTask, deleteTask, editTask }}>
			{props.children}
		</Context.Provider>
	)
}
