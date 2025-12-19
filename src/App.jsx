import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProjectTasks from './pages/ProjectTasks';
import AddProject from './pages/AddProject';
import AddTask from './pages/AddTask';

function App() {
  const [projects, setProjects] = useState([]); 
  const [tasks, setTasks] = useState([]);       

  // ===== دوال المشاريع =====
  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  // ===== دوال المهام =====
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard projects={projects} tasks={tasks} />} />
        <Route
          path="/project/:id"
          element={
            <ProjectTasks
              tasks={tasks}
              deleteTask={deleteTask}
              moveTask={updateTaskStatus} // reuse function
              updateTaskStatus={updateTaskStatus}
              editTask={editTask}
            />
          }
        />
        <Route
          path="/add-project"
          element={<AddProject addProject={addProject} />}
        />
        <Route
          path="/add-task"
          element={<AddTask projects={projects} addTask={addTask} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
