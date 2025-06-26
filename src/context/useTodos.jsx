import { useContext } from "react";
import { TodoContext } from "./todoContext";

const useTodos = () => useContext(TodoContext);

export default useTodos;