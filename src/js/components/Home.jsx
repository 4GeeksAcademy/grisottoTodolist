import { useState } from "react";

const Home = () => {
    const [entry, setEntry] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (entry.trim() !== "") {
            setTasks([...tasks, entry]);
            setEntry(""); 
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-light text-gray-400 mb-6">ToDos</h1>
            <div className="bg-white shadow-md rounded-md w-96">
                <div className="flex gap-2 p-4 border-b">
                    <input 
                        type="text" 
                        onChange={(e) => setEntry(e.target.value)}
                        value={entry}
                        placeholder="Add a task"
                        className="w-full p-2 text-lg border border-gray-300 rounded-md"
                    />
                    <button 
                        onClick={addTask} 
                        className="bg-blue-500 text-white font bold px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        &hearts;
                    </button>
                </div>

                <ul className="divide-y divide-gray-200">
                    {tasks.map((task, index) => (
                        <li key={index} className="flex items-center justify-between p-4">
                            <span className="text-lg text-gray-700">{task}</span>
                            <span onClick={() => removeTask(index)} className="ml-auto cursor-pointer text-black hover:text-red-500 transition text-xl"
                            >
                                🗑️
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="p-4 text-gray-500 border-t text-sm">{tasks.length} item{tasks.length !== 1 ? 's' : ''} left</div>
            </div>
        </div>
    );
};

export default Home;
