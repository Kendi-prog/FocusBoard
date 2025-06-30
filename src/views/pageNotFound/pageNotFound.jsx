import { useNavigate } from "react-router-dom";
import notFoundPage from "../../assets/404-vector1.png"

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center text-center px-4 ">
            <img
                src={notFoundPage}
                alt="Page not found"
                className="w-72 md:max-w-128"
            />
            {/* <h1 className="text-4xl font-bold text-[#1e3a8a] mb-2">404 - Page Not Found</h1> */}
            <h1 className="text-4xl font-bold text-[#1e3a8a] mb-2">Ooops, the page you are looking for does not exist.</h1>
            <button 
            className="inline-block border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400 transition-all duration-200"
            onClick={() => navigate("/")}>
                Go Back Home
            </button>
        </div>
    )
}
