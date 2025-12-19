import Editor from "../components/Editor"
import CoverBuilder from "../components/CoverBuilder"

export default function BookEditor() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <input
                className="text-3xl font-bold w-full outline-none mb-4"
                placeholder="Book Title"
            />

            <Editor />

            <CoverBuilder />
        </div>
    )
}