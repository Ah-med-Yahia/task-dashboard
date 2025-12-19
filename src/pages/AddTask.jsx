import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ projects, addTask }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState(projects.length > 0 ? projects[0].id : "");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const statusMap = {
      "To Do": "todo",
      "In Progress": "in-progress",
      "Done": "done"
    };

    const newTask = {
      id: Date.now(),
      title,
      description,
      projectId: Number(projectId),
      status: statusMap[status]
    };

    addTask(newTask);

    // توجيه المستخدم لصفحة المشروع لعرض المهام الجديدة
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <select
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          required
          className="border p-2 rounded"
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          className="border p-2 rounded"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
