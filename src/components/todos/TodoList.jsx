import { PencilIcon , TrashIcon} from "@heroicons/react/24/outline";

const TodoList = ({ myTodos, handleDeleteTodo, handleUpdate }) => {

  return (
    <div>
      {myTodos.map((todo) => (
        <div
          key={todo.id}
          className="bg-gray-100  my-3 p-3 rounded-lg flex justify-between items-center"
        >
          <div>
            <h1>
              <span className="font-semibold mr-2"> Name:</span> {todo.todoName}
            </h1>
            <h1>
              <span className="font-semibold mr-2">Description: </span> {todo.desc}
            </h1>
            <div>  
              {todo.completed && (
                <span className="mt-2 inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  ✓ Completed
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-4 items-center">
              <button onClick={() => handleUpdate(todo.id)} title="Edit" aria-label="Edit">
                <PencilIcon className="w-5 h-5 text-blue-600 hover:text-blue-800" />
              </button>

              <button onClick={() => handleDeleteTodo(todo.id)} title="Delete" aria-label="Delete">
                <TrashIcon className="w-5 h-5 mr-2 text-red-600 hover:text-red-800" />
              </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
