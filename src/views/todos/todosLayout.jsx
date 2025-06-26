import { Outlet } from "react-router-dom";

import TodosNav from "../../navbar/todosNav";

const TodoLayout = () => {
    return (
        <div className="P-4">
            <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Your Todos</h1>
            <TodosNav />
            <Outlet />
        </div>
    )
}

export default TodoLayout;