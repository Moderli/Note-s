import React, { useState, useEffect } from 'react';

const Timer = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartTimer = () => {
    if (selectedTask && timeLimit > 0) {
      setTimeLeft(timeLimit);
      setIsRunning(true);
      alert(`Timer started for task: ${selectedTask} for ${timeLimit} seconds!`);
    }
  };

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert(`Time's up for task: ${selectedTask}!`);
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, selectedTask]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Set Timer for Task</h2>
      
      <div className="mb-4">
        <select
          className="border rounded-lg p-2 w-full"
          value={selectedTask}
          onChange={(e) => setSelectedTask(e.target.value)}
        >
          <option value="" disabled>Select a task</option>
          {tasks.map((task, index) => (
            <option key={index} value={task.text}>{task.text}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <input
          type="number"
          className="border rounded-lg p-2 w-full"
          placeholder="Set time limit in seconds"
          value={timeLimit}
          onChange={(e) => setTimeLimit(e.target.value)}
          min="1"
        />
      </div>

      <button
        className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200 w-full"
        onClick={handleStartTimer}
      >
        Start Timer
      </button>

      {timeLeft !== null && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Time Left:</h3>
          <p className="text-2xl">{timeLeft} seconds</p>
        </div>
      )}
    </div>
  );
};

export default Timer;
