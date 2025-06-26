import useTodos from "../../context/useTodos";
import TodoList from "../todos/TodoList";

export default function NotStarted() {
  const { todos } = useTodos();
  const filtered = todos.filter(todo => todo.status === "not-started");

  return <TodoList myTodos={filtered} />;
}