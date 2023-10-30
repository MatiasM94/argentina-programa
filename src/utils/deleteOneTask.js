export const deleteOneTask = async (id) => {
	const response = await fetch(`http://localhost:8080/tasks/${id}`, {
		method: 'DELETE',
	});
	const data = await response.json();
	return data;
};
