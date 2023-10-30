import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '@/utils/getTaskById';
import TaskDetail from '@/components/TaskDetail';

const TaskDetailContainer = () => {
	const { id } = useParams();
	const [taskDetail, setTaskDetail] = useState(null);

	useEffect(() => {
		getTaskById(id)
			.then((res) => setTaskDetail(res))
			.catch((err) => console.log(err));
	}, [id]);

	const handleBack = () => {
		history.back();
	};

	return (
		<>
			{taskDetail && <TaskDetail task={taskDetail} />}
			<button className='button' onClick={handleBack}>
				Volver
			</button>
		</>
	);
};

export default TaskDetailContainer;
