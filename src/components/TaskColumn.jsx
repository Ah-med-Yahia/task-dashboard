import TaskCard from "./TaskCard";
import { useState } from "react";

export default function TaskColumn({
  title,
  status,
  projectId,
  tasks,
  search,
  updateTaskStatus,
  deleteTask,
  editTask,
  draggedTask,
  setDraggedTask,
  setTasks
}) {
  const filtered = tasks.filter(t =>
    t.projectId == projectId &&
    t.status === status &&
    (
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    )
  );


  const [dragOverTaskId, setDragOverTaskId] = useState(null);

  const handleDrop = (e, dropTask) => {
    e.preventDefault();
    if (!draggedTask) return;

    if (draggedTask.id === dropTask.id) return;

    const newTasks = [...tasks];
    const draggedIndex = newTasks.findIndex(t => t.id === draggedTask.id);
    const dropIndex = newTasks.findIndex(t => t.id === dropTask.id);

    newTasks.splice(draggedIndex, 1);
    newTasks.splice(dropIndex, 0, { ...draggedTask, status });

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setDraggedTask(null);
    setDragOverTaskId(null);
  };

return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        if (draggedTask && draggedTask.status !== status) {
          updateTaskStatus(draggedTask.id, status);
          setDraggedTask(null);
        }
      }}
    >
      <h3>{title}</h3>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#9ca3af" }}>
          No tasks
        </p>
      )}

      {filtered.map(task => (
        <div
          key={task.id}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOverTaskId(task.id);
          }}
          onDrop={(e) => handleDrop(e, task)}
        >
          <TaskCard
            task={task}
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
            editTask={editTask}
            setDraggedTask={setDraggedTask}
            isDragOver={dragOverTaskId === task.id}
          />
        </div>
      ))}
    </div>
  );
}