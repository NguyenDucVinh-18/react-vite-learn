import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import "./components/todo/todo.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Learn Vite" },
  ]);

  const addTodoList = (name) => {
    const newTodoList = { id: todoList.length + 1, name };
    setTodoList([...todoList, newTodoList]);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addTodoList={addTodoList} />
      <TodoData todoList={todoList} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  );
}

export default App;
