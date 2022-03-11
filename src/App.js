import React, { useState, useRef } from 'react';
import ToDoList from './Components/ToDoList';

function App() {
	const [toDos, setToDos] = useState([]);
	const toDoNameRef = useRef();

	function handleAddToDo(e) {
		const name = toDoNameRef.current.value;
		if (name === '') return;
		console.log(name);
	}

	return (
		<>
			<ToDoList toDos={toDos} setToDos={setToDos} />
			<input ref={toDoNameRef} type='text' />
			<button onClick={handleAddToDo}>Add ToDo</button>
			<button>Clear Completed ToDo</button>
			<div>0 left to do</div>
		</>
	);
}

export default App;
