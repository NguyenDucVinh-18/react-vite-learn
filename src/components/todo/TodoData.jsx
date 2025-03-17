const TodoData = (props) => {
  const { todoList } = props;
  return (
    <div className="todo-data">
      <div>
        {todoList.map((item, index) => {
          return (
            <div className="todo-item">
              <div>{item.name}</div>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoData;
