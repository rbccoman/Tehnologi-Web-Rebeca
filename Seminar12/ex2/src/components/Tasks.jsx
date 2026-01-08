import { useState } from 'react';

const initialTasks = [
  { id: 1, text: 'Learn React Router', completed: false },
  { id: 2, text: 'Build a project', completed: false }
];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const resetTasks = () => {
    setTasks(initialTasks);
  };

  return (
    <div>
      <h1>Tasks</h1>

      <form onSubmit={addTask}>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="New task..."
        />
        <button type="submit">Add</button>
      </form>

      <button onClick={resetTasks}>Reset Tasks</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
