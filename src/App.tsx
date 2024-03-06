import React from 'react';
import {ITask, TaskContext, TaskDispatchContext} from "./template/TaskContext.tsx";
import AddTask from "./components/AddTask/AddTask.tsx";
import cs from './App.module.css';

const App = () => {
	const state = React.useContext(TaskContext);
	const dispatch = React.useContext(TaskDispatchContext);

	function handleAddTask(text: string) {
		if (dispatch) {
			dispatch({
				type: 'added',
				task: {
					done: false,
					id: Math.floor(Math.random() * 100),
					text: text,
				}
			})
		}
	}

	function handleRemoveTask(t: ITask){
		if (dispatch) {
			dispatch({
				type: 'deleted',
				task: t
			})
		}
	}

	return (
		<div className={cs.app}>
			<AddTask handleAddTask={handleAddTask}/>
			{
				state && state.map((t) => (
					<div key={t.id} className={cs.container_row}>
						<p>{t.text}</p>
						<button onClick={() => handleRemoveTask(t)}>remove</button>
					</div>
				))
			}
		</div>
	);
};

export default App;