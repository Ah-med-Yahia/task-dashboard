import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import ProjectTasks from "./pages/ProjectTasks";
import AddProject from "./pages/AddProject";
import AddTask from "./pages/AddTask";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
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