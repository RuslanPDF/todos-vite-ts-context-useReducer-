import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TaskApp from "./template/TaskContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<TaskApp>
		<App/>
	</TaskApp>
)
