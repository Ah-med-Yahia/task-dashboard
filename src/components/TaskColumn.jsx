import TaskCard from "./TaskCard";

export default function TaskColumn({
  title,
  status,
  projectId,
  tasks,
  updateTaskStatus,
  deleteTask,
  editTask
}) {
  const filtered = tasks.filter(
    t => t.projectId == projectId && t.status === status
  );

  return (
    <div className="column">
      <h3>{title}</h3>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#9ca3af" }}>
          No tasks
        </p>
      )}

      {filtered.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}