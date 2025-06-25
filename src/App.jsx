import Navbar from "./navbar/Navbar";
import TodoListApp from "./views/todos/TodoListApp";


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-1/2 mx-auto my-10">
        <TodoListApp />
      </div>
    </div>
  );
};

export default App;
