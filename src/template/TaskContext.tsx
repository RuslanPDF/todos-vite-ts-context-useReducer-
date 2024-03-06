import React, {Dispatch, useReducer} from 'react';
import taskReducer from "../taskReducer.ts";

type Props = {
	children: JSX.Element
}

export interface ITask {
	id: number;
	text: string;
	done: boolean;
}

export type TaskAction = {
	type: string;
	task: ITask;
};

type TaskDispatch = Dispatch<TaskAction>;

const initialTasks = [
	{id: 0, text: 'Philosopher’s Path', done: true},
	{id: 1, text: 'Visit the temple', done: false},
	{id: 2, text: 'Drink matcha', done: false}
];

const TaskApp = ({children}: Props) => {
	const [tasks, dispatch] = useReducer(
		taskReducer,
		initialTasks
	);

	return (
		<TaskContext.Provider value={tasks}>
			<TaskDispatchContext.Provider value={dispatch}>
				{children}
			</TaskDispatchContext.Provider>
		</TaskContext.Provider>
	);
};

export default TaskApp;

export const TaskContext = React.createContext<ITask[]>(initialTasks);
export const TaskDispatchContext = React.createContext<TaskDispatch | null>(null);

