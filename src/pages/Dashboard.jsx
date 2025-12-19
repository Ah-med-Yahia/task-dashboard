import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../api/projectsApi";
import ProjectCard from "../components/ProjectCard";

export default function Dashboard({ projects, setProjects, tasks }) {
  useEffect(() => {
    if (projects.length === 0) {
      fetchProjects().then(setProjects);
    }
  }, [projects.length, setProjects]);

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2>Projects</h2>
        <Link to="/add-project" className="add-btn">
          + Add Project
        </Link>
      </div>

      <div className="grid">
        {projects.map((p) => {
          const count = tasks.filter((t) => t.projectId == p.id).length;

          return <ProjectCard key={p.id} project={p} taskCount={count} />;
        })}
      </div>
    </div>
  );
}