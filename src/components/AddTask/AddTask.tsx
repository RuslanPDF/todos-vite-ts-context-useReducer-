import React from 'react';
import cs from "../../App.module.css";

type TProps = {
	handleAddTask: (text: string) => void;
}

const AddTask = ({handleAddTask}: TProps) => {
	const [input, setInput] = React.useState<string>('')
	return (
		<div className={cs.container_row}>
			<input onChange={(e) => setInput(e.target.value)} placeholder={'text lorem'} value={input}/>
			<button onClick={(event) => {
				event.preventDefault()
				event.stopPropagation()
				handleAddTask(input)
				setInput('')
			}}>add
			</button>
		</div>
	);
};

export default AddTask;