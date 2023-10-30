import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteOneTask } from '@/utils/deleteOneTask';
import Checked from '@/components/Checked';

const TasksList = ({ tasks, updateState, deleteTask, handleModal }) => {
	const completeTask = (task) => {
		task.complete = !task.complete;
		updateState(task.id, task.complete);
	};

	const deleteOne = async (id) => {
		Swal.fire({
			title: '¿Estas seguro?',
			text: '¡No se podrán revertir los cambios!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#684D82',
			cancelButtonColor: '#d33',
			confirmButtonText: '¡Si, quiero borrarlo!',
		}).then(async (result) => {
			if (result.isConfirmed) {
				Swal.fire('Borrado!', 'La tarea fue eliminada.', 'success');
				await deleteOneTask(id);
				deleteTask(id);
			}
		});
	};

	return tasks.map((task) => {
		return (
			<li key={task.id} className='tasks-container__task'>
				<label className='tasks-container__task__label'>
					<input
						type='checkbox'
						checked={task.complete}
						onChange={() => completeTask(task)}
						className='check'
					/>
					<Checked />
					<Link to={`/task/${task.id}`}>
						<span
							className={
								task.complete ? 'tasks-container__task__label__span' : null
							}
						>
							{task.task}
						</span>
					</Link>
				</label>
				<div className='buttons'>
					<button onClick={() => deleteOne(task.id)} className='button__action'>
						❌
					</button>
					<button onClick={() => handleModal(task)} className='button'>
						Editar
					</button>
				</div>
			</li>
		);
	});
};
export default TasksList;
