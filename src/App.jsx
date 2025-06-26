import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import User from "./views/users/users";
import UsersList from "./views/users/usersList";
import PageNotFound from "./views/pageNotFound/pageNotFound";
import Home from "./views/home/home";
import TodoLayout from "./views/todos/todosLayout";
import NotStarted from "./components/filteredTodos/notStarted";
import InProgress from "./components/filteredTodos/inProgress";
import Completed from "./components/filteredTodos/completed";
import About from "./views/about/about";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="w-1/2 mx-auto my-10">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/todo" element={<TodoLayout />}>
            <Route path="not-started" element={<NotStarted />} />
            <Route path="in-progress" element={<InProgress />} />
            <Route path="completed" element={<Completed />} />
            {/* Optional: default redirect */}
            <Route index element={<NotStarted />} />
          </Route>
          <Route path="/users" element={<UsersList />}>
              <Route path="*" element={<PageNotFound />} /> 
          </Route>
          <Route path="/users/:id" element={<User />} />
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  );
};

export default App;
