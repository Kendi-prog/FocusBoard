import useTodos from "../../context/useTodos";
import TodoList from "../todos/TodoList";

export default function InProgress() {
  const { todos } = useTodos();
  const filtered = todos.filter(todo => todo.status === "in-progress");

  return <TodoList myTodos={filtered} />;
}