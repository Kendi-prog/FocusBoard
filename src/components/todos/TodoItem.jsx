import { PencilIcon , TrashIcon } from "@heroicons/react/24/outline";

const TodoItem = ({ todo, handleUpdate, handleDeleteTodo }) => {
  return (
    <div className="bg-white my-3 p-3 rounded-lg flex justify-between items-center ">
      <div>
        <h1>
          <span className="font-semibold mr-2">Name:</span> {todo.todoName}
        </h1>
        <h1>
          <span className="font-semibold mr-2">Description:</span> {todo.desc}
        </h1>

        {/* {todo.completed && (
          <span className="mt-2 inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
            ✓ Completed
          </span>
        )} */}

        {todo.status === "completed" && (
          <span className="mt-2 inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
            ✓ Completed
          </span>
        )}

        {todo.status === "in-progress" && (
          <span className="mt-2 inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
            ⏳ In Progress
          </span>
        )}

        {todo.status === "not-started" && (
          <span className="mt-2 inline-block bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
            🕓 Not Started
          </span>
        )}

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
  );
};

export default TodoItem;
