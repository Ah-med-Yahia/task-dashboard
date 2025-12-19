import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import ProjectTasks from "./pages/ProjectTasks";
import AddProject from "./pages/AddProject";
import AddTask from "./pages/AddTask";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
const [projects, setProjects] = useState(() => {
  const storedProjects = localStorage.getItem("projects");
  return storedProjects ? JSON.parse(storedProjects) : [];
});

const [tasks, setTasks] = useState(() => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
});


  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });
  const [draggedTask, setDraggedTask] = useState(null);

const addProject = (project) => {
    setProjects(prev => {
      const newProjects = [...prev, project];
      localStorage.setItem("projects", JSON.stringify(newProjects));
      return newProjects;
    });
  };

  const addTask = (task) => {
    setTasks(prev => {
      const newTasks = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const updateTaskStatus = (id, status) => {
    setTasks(prev => {
      const newTasks = prev.map(t => t.id === id ? { ...t, status } : t);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const editTask = (updatedTask) => {
    setTasks(prev => {
      const newTasks = prev.map(t => t.id === updatedTask.id ? updatedTask : t);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const deleteTask = (id) => {
    setTasks(prev => {
      const newTasks = prev.filter(t => t.id !== id);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              projects={projects}
              setProjects={setProjects}
              tasks={tasks}
            />
          }
        />
        <Route
          path="/project/:id"
          element={
            <ProjectTasks
              projects={projects}
              tasks={tasks}
              updateTaskStatus={updateTaskStatus}
              deleteTask={deleteTask}
              editTask={editTask}
              setDraggedTask={setDraggedTask}
              draggedTask={draggedTask}
              setTasks={setTasks}
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