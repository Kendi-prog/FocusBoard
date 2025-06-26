import useTodos from "../../context/useTodos";
import TodoList from "../todos/TodoList";

export default function Completed() {
  const { todos } = useTodos();
  const filtered = todos.filter(todo => todo.status === "completed");

  return <TodoList myTodos={filtered} />;
}
