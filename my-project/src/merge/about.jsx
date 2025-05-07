import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Management Dashboard</h1>

      {/* About Section */}
      <div className="mb-8 p-4 rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold mb-2">About This App</h2>
        <p className="text-gray-700">
          This simple task management dashboard helps you stay organized by allowing you to add, mark, and delete your daily tasks. Built using React and Tailwind CSS for a clean and responsive user interface.
        </p>
      </div>

      {/* Task Input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        <button
          onClick={addTask}
          className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" /> Add
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 rounded-lg shadow transition-all duration-300 ${
              task.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span
                className={`text-lg ${
                  task.completed ? "line-through text-gray-500" : "text-black"
                }`}
              >
                {task.text}
              </span>
            </div>
            <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
