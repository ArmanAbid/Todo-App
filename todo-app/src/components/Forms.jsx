import React from "react";

function Forms(props) {
  const createTodoHandler = (event) => {
    if (props.todoTitle != "") {
      const newTodo = {
        id: Date.now(),
        title: props.todoTitle,
        isComplete: false,
      };
      props.setTodoList([...props.todoList, newTodo]);
      props.setTodoTitle("");
    } else {
      alert("Please Enter A Valid Title");
    }
  };
  const updateTodoHandler = (event) => {
    if (props.todoTitle != "") {
      props.setTodoList(
        props.todoList.map((todo) => {
          if (todo.id == props.editableTodo.id) {
            todo.title = props.todoTitle;
          }
          return todo;
        })
      );
    } else {
      alert("Please Enter A Valid Title");
    }

    props.setEditMode(false);
    props.setTodoTitle("");
    props.setEditabelTodo(null);
  };
  return (
    <div className="forms">
      <h2>Todo App</h2>
      <input
        type="text"
        value={props.todoTitle}
        onChange={(event) => props.setTodoTitle(event.target.value)}
      />
      <button
        onClick={() => {
          props.editMode ? updateTodoHandler() : createTodoHandler();
        }}
      >
        {props.editMode ? "Update" : "Add Todo"}
      </button>
    </div>
  );
}

export default Forms;
