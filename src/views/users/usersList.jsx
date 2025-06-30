import { useEffect, useState } from "react";
import UserCard from "../../components/users/userCard";
import { Outlet } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/users";
const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setError("Failed To Fetch The data");
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                setUsers(json);
                setIsLoading(false);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full max-w-5xl mx-auto">
            <h1 className="text-3xl text-blue-600 font-bold text-center my-5">Users List</h1>
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-blue-400 px-4 py-2 rounded-full w-full max-w-md shadow focus:outline-none focus:border-blue-600"
                />
            </div>

            {isLoading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredUsers.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}

            {error && <p className="text-center text-red-500">{error}</p>}
            <Outlet />
        </div>
    );
};

export default UsersList;
