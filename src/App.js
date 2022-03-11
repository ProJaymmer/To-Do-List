import React, { useState } from 'react';
import ToDoList from './Components/ToDoList';

function App() {
	const [toDos, setToDos] = useState(['ToDo 1', 'ToDo 2'])
	return (
		<>
			<ToDoList toDos={toDos} setToDos={setToDos} />
			<input type='text' />
			<button>Add ToDo</button>
			<button>Clear Completed ToDo</button>
			<div>0 left to do</div>
		</>
	);
}

export default App;
