export const postTask = async (task) => {
	const body = JSON.stringify(task);
	const response = await fetch('http://localhost:8080/tasks', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: body,
	});

	const data = response.json();

	return data;
};
