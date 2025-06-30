import { Outlet, useSearchParams } from "react-router-dom";
import TodosNav from "../../navbar/todosNav";

const TodoLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("query") || "";

    const handleInputChange = (e) => {
        setSearchParams({ query: e.target.value})
    }

    return (
        <div className="P-4">
            <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Your Todos</h1>
            <TodosNav />
            <input 
                type="text"
                placeholder="Search todos..."
                value={searchTerm}
                onChange={handleInputChange}
                className="border border-blue-300 px-4 py-2 rounded-xl w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
            />
            <Outlet />
        </div>
    )
}

export default TodoLayout;