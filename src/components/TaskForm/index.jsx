import { PropTypes } from 'prop-types';
import { postTask } from '@/utils/postTask';

const TaskForm = ({ setTask }) => {
	const addTask = async (e) => {
		e.preventDefault();

		const task = e.target.task;
		const newTaskInfo = {
			task: task.value,
			complete: false,
		};

		await postTask(newTaskInfo);

		setTask(newTaskInfo);
		task.value = '';
	};
	return (
		<form onSubmit={addTask} className='tasks-container__form'>
			<label htmlFor='task'>
				<input
					type='text'
					name='task'
					className='tasks-container__form__input-task'
					placeholder='Ingrese una tarea...'
					required
				/>
			</label>
			<button className='button'>Agregar</button>
		</form>
	);
};

TaskForm.propTypes = {
	setTask: PropTypes.func.isRequired,
};

export default TaskForm;
