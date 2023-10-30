export const getTaskById = async (id) => {
	const response = await fetch(`http://localhost:8080/tasks/${id}`);
	const data = await response.json();
	return data;
};
