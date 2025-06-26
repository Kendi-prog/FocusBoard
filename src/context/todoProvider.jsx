import { useEffect, useState } from "react";
import { TodoContext } from "./todoContext";



// URL for fetching data
const url = "https://jsonplaceholder.typicode.com/todos";

// Provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tasks only once
  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch todos");
        const data = await response.json();
        const transformed = data.slice(0, 10).map((todo) => ({
          id: todo.id,
          todoName: todo.title,
          desc: "No description available",
          status: "not-started",
        }));
        setTodos(transformed);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Add task
  const addTodo = (newTodo) => {
    setTodos((prev) => [{ ...newTodo, id: Date.now() }, ...prev]);
  };

  // Delete task
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Update task
  const updateTodo = (updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, isLoading, error, addTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

