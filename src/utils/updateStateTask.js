export const updateStateTask = async (id, complete) => {
	const body = JSON.stringify({ complete });
	const response = await fetch(`http://localhost:8080/tasks/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: body,
	});
	const data = await response.json();
	return data;
};
