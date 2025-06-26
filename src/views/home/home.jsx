import { useState } from "react";
import useTodos from "../../context/useTodos";
import TodoForm from "../../components/todos/TodoForm";
import TodoList from "../../components/todos/TodoList";
import Modal from "../../components/modal/modal";

const Home = () => {
  const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    isLoading,
    error
  } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [deletedTodoName, setDeletedTodoName] = useState("");
  const [todoToDeleteId, setTodoDeleteId] = useState(null);
  const [updatedTodoName, setUpdatedTodoName] = useState("");

  const [todoData, setTodoData] = useState({
    id: null,
    todoName: "",
    desc: "",
    status: "not-started",
  });

  const handleInputChange = (e) => {
    setTodoData({
      ...todoData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      updateTodo(todoData);
      setIsEditing(false);
      setUpdatedTodoName(todoData.todoName);
      setIsSuccessModalOpen(true);
    } else {
      addTodo(todoData);
    }

    setTodoData({
      id: null,
      todoName: "",
      desc: "",
      status: "not-started",
    });
  };

  const handleUpdate = (id) => {
    const todo = todos.find((t) => t.id === id);
    setTodoData(todo);
    setIsEditing(true);
  };

  const handleDeleteTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    setDeletedTodoName(todo.todoName);
    setTodoDeleteId(id);
    setOpenModal(true);
  };

  const confirmDelete = () => {
    deleteTodo(todoToDeleteId);
    setOpenModal(false);
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setDeletedTodoName("");
  };

  return (
    <div>
      <h1 className="text-2xl text-gray-700 text-center font-bold">
        Todo List
      </h1>

      <div className="my-5">
        <TodoForm
          todoData={todoData}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      </div>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div>
          <TodoList
            myTodos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdate={handleUpdate}
          />
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Confirm Delete Modal */}
      <Modal show={openModal} modalClosed={() => setOpenModal(false)}>
        <p className="text-center text-amber-800 text-3xl uppercase">
          Confirm Delete
        </p>
        <p className="text-center text-gray-700 mt-2">
          Are you sure you want to delete:{" "}
          <span className="font-semibold">{deletedTodoName}</span>?
        </p>
        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-400 px-4 py-2 rounded-xl"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-amber-800 px-4 py-2 rounded-xl"
            onClick={confirmDelete}
          >
            Delete
          </button>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal show={isSuccessModalOpen} modalClosed={closeSuccessModal}>
        <p className="text-center text-green-600 text-3xl uppercase">
          Success!
        </p>
        <p className="text-center text-gray-700 mt-2">
          Successfully updated or deleted item:{" "}
          <span className="font-semibold">{deletedTodoName || updatedTodoName}</span>
        </p>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl text-white font-medium"
            onClick={closeSuccessModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;

