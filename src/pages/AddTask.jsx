import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTask({ projects, addTask }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState('');
  const [status, setStatus] = useState('todo');

  const submit = e => {
    e.preventDefault();

    if (!projectId) {
      alert("Please select a project");
      return;
    }

    addTask({
      id: Date.now(),
      title,
      description,
      projectId,
      status
    });

    navigate(`/project/${projectId}`); 
  };

  return (
    <form onSubmit={submit} className="form">
      <h2>Add Task</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <select value={projectId} onChange={e => setProjectId(e.target.value)}>
        <option value="">Select Project</option>
        {projects.map(p => (
          <option key={p.id} value={p.id}>
            {p.title}
          </option>
        ))}
      </select>

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="todo">To Do</option>
        <option value="progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}