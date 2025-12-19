import { useParams, Link } from "react-router-dom";
import TaskColumn from "../components/TaskColumn";
import { useState } from "react";

export default function ProjectTasks({
  projects,
  tasks,
  updateTaskStatus,
  deleteTask,
  editTask,
  draggedTask,
  setDraggedTask,
  setTasks
}) {
  const { id } = useParams();
  const project = projects.find((p) => p.id == id);

   const [search, setSearch] = useState("");

  if (!project) {
    return <h2 style={{ textAlign: "center" }}>Project not found</h2>;
  }

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2 className="project-title">{project.title}</h2>
        <Link to="/add-task" className="add-btn">
          + Add Task
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search tasks..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="columns">
        {["todo", "progress", "done"].map(status => (
          <TaskColumn
            key={status}
            title={status === "todo" ? "To Do" : status === "progress" ? "In Progress" : "Done"}
            status={status}
            projectId={id}
            tasks={tasks}
            search={search}
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
            editTask={editTask}
            draggedTask={draggedTask}
            setDraggedTask={setDraggedTask}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
}