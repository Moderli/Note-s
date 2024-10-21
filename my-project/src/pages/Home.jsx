import React, { useState } from 'react';
import Timer from './Timer';
import CompletedTasks from './CompletedTasks';
import Notes from './Notes'; // Import the Notes component

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [showNotes, setShowNotes] = useState(false); // State to toggle notes display

  const handleAddTask = () => {
    if (taskInput) {
      setTasks([...tasks, { text: taskInput, completed: false, timeSpent: 0 }]);
      setTaskInput('');
    }
  };

  const handleToggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        const updatedTask = { ...task, completed: !task.completed };
        if (!task.completed) {
          setCompletedTasks((prev) => [
            ...prev,
            { text: updatedTask.text, timeSpent: updatedTask.timeSpent },
          ]);
        }
        return updatedTask;
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to My Helper!</h2>

        {/* Task Input Section */}
        <div className="flex mb-4">
          <input
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Add a new task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded-lg p-2 ml-2 hover:bg-blue-600 transition duration-200"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <h3 className="text-lg font-semibold mb-2">Your Tasks:</h3>
        <ul className="list-disc pl-5 mb-4">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li key={index} className={`flex items-center mb-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleCompletion(index)}
                  className="mr-2"
                />
                {task.text}
              </li>
            ))
          ) : (
            <li>No tasks added yet.</li>
          )}
        </ul>

        {/* Toggle Notes Display */}
        <button
          className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200"
          onClick={() => setShowNotes(!showNotes)}
        >
          {showNotes ? 'Hide Notes' : 'Show Notes'}
        </button>
      </div>

      {/* Timer Component */}
      <Timer tasks={tasks} />

      {/* Completed Tasks Component */}
      <CompletedTasks completedTasks={completedTasks} />

      {/* Conditionally Render Notes Component */}
      {showNotes && <Notes />}
    </div>
  );
};

export default Home;
