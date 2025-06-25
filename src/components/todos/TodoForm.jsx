const TodoForm = ({ todoData, handleInputChange, handleFormSubmit, isEditing }) => {
  return (
    <div>
      <form
        className="border border-gray-500 rounded-md p-5 flex flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <div className="flex items-center gap-11">
          <label htmlFor="name" className="text-sm font-medium">
            Name:
          </label>
          <input
            type="text"
            className="border border-gray-300 p-1.5 rounded-md flex-1"
            placeholder="Enter task name"
            id="todoName"
            value={todoData.todoName}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="desc" className="text-sm font-medium">
            Description:
          </label>
          <input
            type="text"
            className="border border-gray-300 p-1.5 rounded-md flex-1"
            placeholder="Enter description"
            id="desc"
            value={todoData.desc}
            onChange={handleInputChange}
          />
        </div>
   
        <div className="flex items-center gap-10">
          <label htmlFor="status" className="text-sm font-medium">
            Status:
          </label>
          <select
            id="status"
            value={todoData.status}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md flex-1"
          >
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>


        <button
          type="submit"
          className="p-1.5 rounded-md bg-gray-800 text-white"
        >
          {isEditing ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm