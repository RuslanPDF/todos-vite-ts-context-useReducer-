import {ITask, TaskAction} from "./template/TaskContext.tsx";

export default function tasksReducer(tasks: ITask[], action: TaskAction) {
	switch (action.type) {
		case 'added': {
			return [...tasks, {
				id: action.task.id,
				text: action.task.text,
				done: false
			}];
		}
		case 'changed': {
			return tasks.map(t => {
				if (t.id === action.task.id) {
					return action.task;
				} else {
					return t;
				}
			});
		}
		case 'deleted': {
			return tasks.filter(t => t.id !== action.task.id);
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}