import { PropTypes } from 'prop-types';
const TaskDetail = ({ task }) => {
	console.log(task.complete);
	return (
		<>
			<h1>{task.task}</h1>
			<h3>
				Complete:
				<span>{task.complete ? 'Tarea Realizada' : 'Tarea sin realizar'}</span>
			</h3>
		</>
	);
};

TaskDetail.propTypes = {
	task: PropTypes.object,
};

export default TaskDetail;
