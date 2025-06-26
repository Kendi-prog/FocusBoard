import TodoItem from "./TodoItem";

const TodoList = ({ myTodos, handleDeleteTodo, handleUpdate }) => {

  return (
    <div>
      {myTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;


