import React, { useState, useRef } from 'react';
import ToDoList from './Components/ToDoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [toDos, setToDos] = useState([]);
	const toDoNameRef = useRef();

	function handleAddToDo(e) {
		const name = toDoNameRef.current.value;
		if (name === '') return;
		setToDos((prevToDos) => {
			return [...prevToDos, { id: uuidv4(), name: name, complete: false }];
		});
		toDoNameRef.current.value = null;
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
