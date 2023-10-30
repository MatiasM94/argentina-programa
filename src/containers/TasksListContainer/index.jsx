import { useEffect, useState } from 'react';
import TaskForm from '@/components/TaskForm';
import { getTask } from '@/utils/getTasks';
import TasksList from '@/components/TasksList';
import { updateStateTask } from '@/utils/updateStateTask';
import Modal from '@/components/Modal';

const TasksListContainer = () => {
	const [tasks, setTasks] = useState([]);
	const [infoModal, setinfoModal] = useState({ state: false });
	const [blur, setBlur] = useState(null);

	useEffect(() => {
		getTask()
			.then((res) => setTasks(res))
			.catch((err) => console.log(err));
	}, []);

	const handleModal = (task) => {
		setinfoModal({ state: !infoModal.state, ...task });
		setBlur('blur');
	};

	const addTask = (task) => {
		setTasks((prevItems) => {
			return [
				...prevItems,
				{
					id:
						prevItems.length === 0 ? 1 : prevItems[prevItems.length - 1].id + 1,
					...task,
				},
			];
		});
	};

	const updateState = async (id, complete) => {
		const findIndex = tasks.findIndex((t) => t.id === id);
		tasks[findIndex].complete = complete;
		await updateStateTask(id, complete);
		setTasks([...tasks]);
	};

	const deleteTask = (id) => {
		const newTasksList = tasks.filter((task) => task.id !== id);
		setTasks(newTasksList);
	};

	const updateTask = (id, task) => {
		const findIndex = tasks.findIndex((t) => t.id === id);
		tasks[findIndex].task = task;
		setTasks([...tasks]);
	};

	const clearClassBlur = () => {
		setBlur('');
		setinfoModal({ state: false });
	};
	return (
		<>
			<h1 className='title'>To-Do List</h1>
			<section className={`tasks-container ${blur}`}>
				<div className='tasks-container__header'>
					<TaskForm setTask={addTask} />
					{tasks.length === 0 && <h3>No hay tareas pendientes</h3>}
				</div>
				<ul>
					<TasksList
						tasks={tasks}
						updateState={updateState}
						deleteTask={deleteTask}
						handleModal={handleModal}
					/>
				</ul>
			</section>
			{infoModal.state && (
				<Modal
					taskInfo={infoModal}
					updateTaskList={updateTask}
					clearClassBlur={clearClassBlur}
				/>
			)}
		</>
	);
};

export default TasksListContainer;
