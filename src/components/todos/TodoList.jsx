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


// import TodoCategory from "./TodoCategory.jsx";

// const TodoList = ({ myTodos, handleDeleteTodo, handleUpdate}) => {
//     const completedTodos = myTodos.filter((todo) => todo.completed);
//     const inProgressTodos = myTodos.filter((todo) => !todo.completed);

//   return (
//     <div className="container flex gap-4 mx-auto p-4">
//       <TodoCategory
//             title={"In Progress To-Dos"}
//             todos={inProgressTodos}
//             handleUpdate={handleUpdate}
//             handleDeleteTodo={handleDeleteTodo}
//             titleColor="text-gray-700"
//       />
//       <TodoCategory
//                 title={"Completed To-Dos"}
//                 todos={completedTodos}
//                 handleUpdate={handleUpdate}
//                 handleDeleteTodo={handleDeleteTodo}
//                 titleColor="text-amber-700"
//             />
//     </div>
//   );
// };

// export default TodoList;
