import React, { useState } from 'react';
    import './index.css';

    function App() {
      const [tasks, setTasks] = useState([]);
      const [taskInput, setTaskInput] = useState('');

      const addTask = () => {
        if (taskInput.trim()) {
          setTasks([...tasks, { text: taskInput, completed: false }]);
          setTaskInput('');
        }
      };

      const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };

      const toggleComplete = (index) => {
        const newTasks = tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
      };

      return (
        <div className="app">
          <h1>Todo App</h1>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={addTask}>Add Task</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                <span onClick={() => toggleComplete(index)}>{task.text}</span>
                <button onClick={() => removeTask(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
