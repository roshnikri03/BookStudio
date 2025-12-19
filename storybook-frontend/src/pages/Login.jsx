import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-96 bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-bold mb-4 text-center">StoryBook</h1>

                <input
                    className="w-full border p-2 mb-3"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="w-full border p-2 mb-4"
                    placeholder="Password"
                />

                <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full bg-black text-white p-2 rounded"
                >
                    Login
                </button>
            </div>
        </div>
    )
}