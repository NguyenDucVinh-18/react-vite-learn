const TodoData = (props) => {
  const { todoList , deleteTodo} = props;
  
  return (
    <div className="todo-data">
      <div>
        {todoList.map((item, index) => {
          return (
            <div className="todo-item" key={item.id}>
              <div>{item.name}</div>
              <button
                onClick={() => deleteTodo(item.id)}
              >Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoData;
