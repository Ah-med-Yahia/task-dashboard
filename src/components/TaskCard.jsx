import { useState } from "react";

export default function TaskCard({
  task,
  updateTaskStatus,
  deleteTask,
  editTask
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const save = () => {
    editTask({ ...task, title, description, status });
    setOpen(false);
  };

  return (
    <>
      {/* ===== TASK CARD ===== */}
      <div className="task-card">
        <div className="task-header">
          <h4 className="task-title">{task.title}</h4>

          <div className="task-actions">
            <button
              className="icon-btn edit"
              title="Edit"
              onClick={() => setOpen(true)}
            >
              Edit
            </button>

            <button
              className="icon-btn delete"
              title="Delete"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>

        <p className="task-desc">{task.description}</p>

        {/* ===== STATUS SELECT ===== */}
        <select
          className={`task-select ${task.status}`}
          value={task.status}
          onChange={e => updateTaskStatus(task.id, e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      {/* ===== EDIT MODAL ===== */}
      {open && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Task</h3>

            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
            />

            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
            />

            <select value={status} onChange={e => setStatus(e.target.value)}>
              <option value="todo">To Do</option>
              <option value="progress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <div className="modal-actions">
              <button onClick={save}>Save</button>
              <button className="cancel" onClick={() => setOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}