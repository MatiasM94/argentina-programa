import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from '@/Root';
import TasksListContainer from '@/containers/TasksListContainer';
import TaskDetailContainer from '@/containers/TaskDetailContainer';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <h1>Page not found</h1>,
		children: [
			{
				path: '/',
				element: <TasksListContainer />,
			},
			{
				path: '/task/:id',
				element: <TaskDetailContainer />,
			},
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
