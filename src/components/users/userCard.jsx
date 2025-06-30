import { Link } from "react-router-dom";

export default function UserCard({ user }) {
    return (
        <div className="border-2 border-blue-400 rounded-xl p-6 shadow-lg hover:shadow-blue-400 transition duration-300 bg-whitew-full">
            <Link to={`${user.id}`}>
                <h2 className="text-xl font-bold text-blue-700 mb-2">{user.name}</h2>
                <p className="text-gray-800"><span className="font-semibold">Email:</span> {user.email}</p>
                <p className="text-gray-800"><span className="font-semibold">Phone:</span> {user.phone}</p>
                <p className="text-gray-800"><span className="font-semibold">Website:</span> {user.website}</p>
                <p className="text-gray-800"><span className="font-semibold">Company:</span> {user.company.name}</p>
            </Link>
        </div>
    );
}
