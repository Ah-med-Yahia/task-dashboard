export default function ProjectCard({ project, taskCount, onView }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Tasks: {taskCount}</p>
      <button onClick={onView}>View Tasks</button>
    </div>
  );
}