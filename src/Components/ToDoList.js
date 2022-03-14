import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({ toDos, toggleToDo }) {
	return toDos.map((todo) => {
		return <ToDoItem key={todo.id} todo={todo} toggleToDo={toggleToDo} />;
	});
}
