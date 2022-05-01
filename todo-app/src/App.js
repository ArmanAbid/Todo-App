import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Forms from "./components/Forms";
import TodoList from "./components/TodoList";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableTodo, setEditabelTodo] = useState(null);

  return (
    <div className="App">
      <Forms
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoList={todoList}
        setTodoList={setTodoList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableTodo={editableTodo}
        setEditabelTodo={setEditabelTodo}
      />
      <TodoList
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoList={todoList}
        setTodoList={setTodoList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableTodo={editableTodo}
        setEditabelTodo={setEditabelTodo}
      />
    </div>
  );
}

export default App;
