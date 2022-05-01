import React from "react";

function TodoList(props) {
  const editTodoHandler = (id) => {
    const todoToBeEdited = props.todoList.find((item) => item.id === id);
    props.setEditMode(true);
    props.setEditabelTodo(todoToBeEdited);
    props.setTodoTitle(todoToBeEdited.title);
  };
  const deleteTodoHandler = (id) => {
    const newTodoList = props.todoList.filter((item) => item.id !== id);
    props.setTodoList(newTodoList);
  };
  return (
    <div className="todo-list">
      <ul>
        {props.todoList.map(todo => (
          <li>
            <span>{todo.title}</span>
            <button onClick={() => editTodoHandler(todo.id)}>Edit</button>
            <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
