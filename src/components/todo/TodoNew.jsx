import { useState } from "react";

const TodoNew = (props) => {
  const [inputValue, setInputValue] = useState("");
  const { addTodoList } = props;
  const handleClickAdd = (name) => {
    addTodoList(name);
    setInputValue("");
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <button onClick={() => handleClickAdd(inputValue)}>Add</button>
    </div>
  );
};

export default TodoNew;
