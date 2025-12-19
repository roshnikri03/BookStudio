import { Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Books</h2>

            <Link
                to="/book/new"
                className="inline-block bg-black text-white px-4 py-2 rounded"
            >
                + Create New Book
            </Link>
        </div>
    )
}