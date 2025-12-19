import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = ({ addProject }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newProject = {
      id: Date.now(), // رقم فريد مؤقت
      title,
      description,
      tasks: [],
    };

    // استخدام دالة addProject من App
    addProject(newProject);

    // إعادة التوجيه للداشبورد
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Project Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Project Description</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
