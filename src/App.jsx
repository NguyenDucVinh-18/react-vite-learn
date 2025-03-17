import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import "./components/todo/todo.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoList = (name) => {
    const newTodoList = { id: todoList.length + 1, name };
    setTodoList([...todoList, newTodoList]);
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addTodoList={addTodoList} />

      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="todo-image">
          <img className="logo" src={reactLogo} />
        </div>
      )}

      {/* {todoList.length > 0 && <TodoData todoList={todoList} />}


      {todoList.length === 0 && (
        <div className="todo-image">
          <img className="logo" src={reactLogo} />
        </div>
      )} */}
    </div>
  );
}

export default App;
