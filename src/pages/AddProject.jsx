import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProject({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    addProject({ id: Date.now(), title, description });
    navigate("/");
  };

  return (
    <form onSubmit={submit} className="form">
      <h2>Add Project</h2>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}