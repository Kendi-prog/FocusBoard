import { useSearchParams } from "react-router-dom";
import useTodos from "../../context/useTodos";
import TodoList from "../todos/TodoList";

export default function NotStarted() {
  const { todos } = useTodos();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query") || "";

  const filtered = todos
  .filter(todo => todo.status === "not-started")
  .filter(todo => todo.todoName.toLowerCase().includes(searchTerm.toLowerCase()));

  return <TodoList myTodos={filtered} />;
}