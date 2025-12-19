import { Link } from 'react-router-dom';

export default function ProjectCard({ project, taskCount }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <p><strong>Tasks:</strong> {taskCount}</p>

      <Link to={`/project/${project.id}`}>View Tasks</Link>
    </div>
  );
}