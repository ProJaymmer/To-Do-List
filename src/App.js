// useEffect (READ: SIDE EFFECT); WHEN AN ELEMENT IN ITS SECOND ARGUMENT (THE ARRAY) IS MODIFIED, useEffect WILL RE-RENDER THE FIRST ARGUMENT; I.E. A SIDE EFFECT OF THE SECOND ARGUMENT UPDATING IS THE FIRST ARGUMENT UPDATING AS WELL.
import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './Components/ToDoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'toDoApp.toDos';

function App() {
	const [toDos, setToDos] = useState([]);
	const toDoNameRef = useRef();

	// IF THERE ARE TODOS, THIS WILL GET THEM
	useEffect(() => {
		// LOCAL_STORAGE_KEY IS A STRING; toDos IS AN ARRAY, ERGO, MUST PARSE
		const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedToDos) setToDos(storedToDos);
		// BECAUSE THE ARRAY BELOW IS EMPTY, USE EFFECT WILL ONLY RUN ONCE: ON PAGE LOAD.
	}, []);

	// THIS WILL STORE TODOS EVERY TIME A TODO ITEM IS ADDED
	useEffect(() => {
		// MUST PASS INTO LOCAL STORAGE AS A STRING
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
		// EVERY TIME toDos CHANGES, USE EFFECT WILL RUN.
	}, [toDos]);

	// THIS WILL ADD A TODO ITEM
	function handleAddToDo(e) {
		// THIS REFERENCES THE INPUT FIELD VALUE
		const name = toDoNameRef.current.value;
		// IF THE INPUT FIELD IS BLANK UPON ENTERING, NOTHING IS RETURNED
		if (name === '') return;
		// THIS SETS THE TODO LIST WITH FORMER ENTRIES AND THE NEW ENTRY
		setToDos((prevToDos) => {
			return [...prevToDos, { id: uuidv4(), name: name, complete: false }];
		});
		// THIS WILL CLEAR THE INPUT FIELD AFTER TODO ITEM IS ADDED TO LIST
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
