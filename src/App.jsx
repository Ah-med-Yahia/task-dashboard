import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProjectTasks from "./pages/ProjectTasks";
import AddTask from "./pages/AddTask";
import AddProject from "./pages/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project/:id" element={<ProjectTasks />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;