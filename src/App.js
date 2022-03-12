import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './Components/ToDoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'toDoApp.toDos';

function App() {
	const [toDos, setToDos] = useState([]);
	const toDoNameRef = useRef();

	// IF THERE ARE TODOS, THIS WILL GET THEM
	useEffect(() => {
		const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedToDos) setToDos(storedToDos);
	}, []);

	// THIS WILL STORE TODOS
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
	}, [toDos]);

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
