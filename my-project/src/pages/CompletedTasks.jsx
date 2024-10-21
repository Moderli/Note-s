import React from 'react';

const CompletedTasks = ({ completedTasks }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mt-4">
      <h2 className="text-2xl font-semibold mb-2 text-center">Completed Tasks</h2>
      <ul className="list-disc pl-5">
        {completedTasks.length > 0 ? (
          completedTasks.map((task, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{task.text}</span> - Time Used: {task.timeSpent} seconds
            </li>
          ))
        ) : (
          <li>No tasks completed yet.</li>
        )}
      </ul>
    </div>
  );
};

export default CompletedTasks;
