import { useParams, Link } from "react-router-dom";
import TaskColumn from "../components/TaskColumn";

export default function ProjectTasks({
  projects,
  tasks,
  updateTaskStatus,
  deleteTask,
  editTask,
}) {
  const { id } = useParams();
  const project = projects.find((p) => p.id == id);

  if (!project) {
    return <h2 style={{ textAlign: "center" }}>Project not found</h2>;
  }

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2>{project.title}</h2>
        <Link to="/add-task" className="add-btn">
          + Add Task
        </Link>
      </div>

      <div className="columns">
        <TaskColumn
          title="To Do"
          status="todo"
          projectId={id}
          tasks={tasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTask={editTask}
        />

        <TaskColumn
          title="In Progress"
          status="progress"
          projectId={id}
          tasks={tasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTask={editTask}
        />

        <TaskColumn
          title="Done"
          status="done"
          projectId={id}
          tasks={tasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}