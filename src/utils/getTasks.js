export const getTask = async () => {
	const response = await fetch('http://localhost:8080/tasks');
	const data = await response.json();
	return data;
};
