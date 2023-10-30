export const uptadateOneTask = async (id, task, complete) => {
	const body = JSON.stringify({
		task,
		complete,
	});
	const response = await fetch(`http://localhost:8080/tasks/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: body,
	});

	const data = await response.json();
	return data;
};
