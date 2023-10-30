import { PropTypes } from 'prop-types';
import Swal from 'sweetalert2';
import { uptadateOneTask } from '@/utils/uptadateOneTask';

const Modal = ({ taskInfo, updateTaskList, clearClassBlur }) => {
	const { id, task, complete } = taskInfo;

	const updateTask = async (e) => {
		e.preventDefault();

		Swal.fire({
			title: '¿Quieres guardar los cambios?',
			showCancelButton: true,
			confirmButtonText: 'Guardar',
			confirmButtonColor: '#684D82',
		}).then(async (result) => {
			if (result.isConfirmed) {
				Swal.fire('¡Tarea actualizada!', '', 'success');

				const inputTask = e.target.task;

				await uptadateOneTask(id, inputTask.value, complete);
				updateTaskList(id, inputTask.value);

				inputTask.value = '';
				clearClassBlur();
			} else if (result.isDenied) {
				Swal.fire('No se pudo guardar los cambios', '', 'info');
			}
		});
	};
	return (
		<section className='modal-task'>
			<form onSubmit={updateTask}>
				<label htmlFor='task' className='label-task'>
					Editar task
					<input
						type='text'
						name='task'
						className='modal-task__input task'
						defaultValue={task}
						placeholder='Editar tarea'
					/>
				</label>
				<h3>Estado: {complete ? 'Tarea Realizada' : 'Tarea sin realizar'}</h3>
				<div className='div-buttons'>
					<button className='button'>Aceptar</button>
					<button className='button button__cancel' onClick={clearClassBlur}>
						Cerrar
					</button>
				</div>
			</form>
		</section>
	);
};

Modal.propTypes = {
	taskInfo: PropTypes.object,
	updateTaskList: PropTypes.func,
	clearClassBlur: PropTypes.func,
};

export default Modal;
