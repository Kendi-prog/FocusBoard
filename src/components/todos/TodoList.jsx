import TodoItem from "./TodoItem";
import noTasksImage from "../../assets/noTask-2.png";

const TodoList = ({ myTodos, handleDeleteTodo, handleUpdate }) => {
  if (myTodos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <img
          src={noTasksImage}
          alt="No tasks"
          className="w-60 mb-4"
        />
        <p className="text-gray-500 text-lg font-semibold">No tasks available in this category.</p>
      </div>
    );
  }
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


