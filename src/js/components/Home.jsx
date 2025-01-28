import { useState } from "react";

const Home = () => {
	const [entry, setEntry] = useState("");
	const [tasks, setTasks] = useState([]);

	const addTask = () => {
		if (entry.trim() !== "") {
			setTasks([...tasks, entry]);
			setEntry(""); // Clear input field after adding
		}
	};

	return (
		<div className="container">
			<h1>Todo List</h1>			
				<input 
					type="text" 
					onChange={(e) => setEntry(e.target.value)}
					value={entry}
					placeholder="Add a task"
				/>				
			
			<button onClick={addTask}>Add</button>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						{task}            <i class="fa-regular fa-trash-can"></i>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;