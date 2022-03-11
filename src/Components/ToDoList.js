import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({ toDos }) {
	return toDos.map((todo) => {
		return <ToDoItem todo={todo} />;
	});
}
