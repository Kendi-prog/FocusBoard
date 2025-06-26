import { useEffect, useState } from "react";
import TodoList from "../../components/todos/TodoList";
import TodoForm from "../../components/todos/TodoForm";
import Modal from "../../components/modal/modal";


const url = "https://jsonplaceholder.typicode.com/todos";

const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  
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

  // const listTopRef = useRef(null);

    useEffect(() =>{
    async function getData() {

      setIsLoading(true);
      try {
        const response = await fetch(url);
        console.log(response);
        
        if (!response.ok) {
          setError("Failed To Fetch The data")
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
       
        
      setTodos(json.slice(0, 10).map(todo => ({
          id: todo.id,
          todoName: todo.title,
          desc: "No description available",
          status: todo.status,
        })));
        
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }finally{
        setIsLoading(false);
      }
    }
    
    getData();
  },[]);

  const handleInputChange = (event) => {
    setTodoData({
      ...todoData,
      [event.target.id]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isEditing) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === todoData.id
            ? {
                ...todo,
                todoName: todoData.todoName,
                desc: todoData.desc,
                status: todoData.status,
              }
            : todo
        )
      );
      setIsEditing(false);
    } else {
      setTodos((prevTodos) => [
        
        {
          ...todoData,
          id: Math.floor(Math.random() * 1000),
        },
        ...prevTodos,
      ]);

    // if (listTopRef.current) {
    //   listTopRef.current.scrollIntoView({ 
    //     behavior: "smooth",
    //     block: "start", 
    //   });
    //   }
    setTodoData({
      todoName: "",
      desc: "",
      status: "not-started",
    });
    }
  };


  const handleDeleteTodo = (id) => {
    setTodoDeleteId(id)
    setOpenModal(true);
  };

  //Amber button -- deletes the todo item
  const handleDelete = () => {
    const todoToBeDeleted = todos.find(todo => todo.id === todoToDeleteId);
    setDeletedTodoName(todoToBeDeleted.todoName);
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== todoToDeleteId)
    );

    setOpenModal(false);
    setIsSuccessModalOpen(true);

  }

  const handleUpdate = (id) => {
    setIsEditing(true);
    const todoToUpdate = todos.find((todo) => todo.id === id);
    setUpdatedTodoName(todoToUpdate.todoName);

    setTodoData({
      id: todoToUpdate.id,
      todoName: todoToUpdate.todoName,
      desc: todoToUpdate.desc,
      status: todoToUpdate.status,
    });

    setOpenModal(false);
    // setIsSuccessModalOpen(true);
 
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setDeletedTodoName("");
  }
  


  return (
    <div>
      <h1 className="text-2xl text-gray-700 text-center font-bold">
        Todo List
      </h1>
      {/* //sticky top-0 bg-white z-10 p-5 shadow-md */}
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
          {/* <div ref={listTopRef}></div> */}
          <Modal show={openModal} modalClosed={() => setOpenModal(false)}>
            <p className="text-center text-amber-800 text-3xl uppercase">Confirm Delete</p>
            <p className="text-center text-gray-700 mt-2">Are you sure you want to delete:
              <span className="font-semibold">{deletedTodoName}</span>
            </p>
            <div className="flex justify-between mt-4">
              <button className="bg-blue-400 px-4 py-2 rounded-xl"  onClick={() => setOpenModal(false)}>Cancel</button>
              <button className="bg-amber-800 px-4 py-2 rounded-xl"  onClick={handleDelete}>Delete</button>
            </div>
         </Modal>

          <Modal show={isSuccessModalOpen} modalClosed={closeSuccessModal}>
            <p className="text-center text-green-600 text-3xl uppercase">
              Success!
            </p>
            <p className="text-center text-gray-700 mt-2">
              Successfully deleted item:{" "}
              <span className="font-semibold">{deletedTodoName}</span>.
            </p>
            <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl text-white font-medium transition duration-200"
                onClick={closeSuccessModal}
              >
                Close
              </button>
            </div>
          </Modal>
          <Modal show={isSuccessModalOpen} modalClosed={closeSuccessModal}>
            <p className="text-center text-green-600 text-3xl uppercase">
              Success!
            </p>
            <p className="text-center text-gray-700 mt-2">
              Successfully updated item:{" "}
              <span className="font-semibold">{updatedTodoName}</span>.
            </p>
            <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl text-white font-medium transition duration-200"
                onClick={closeSuccessModal}
              >
                Close
              </button>
            </div>
          </Modal>
          <TodoList
            myTodos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdate={handleUpdate}
          />
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
};

export default TodoListApp;
