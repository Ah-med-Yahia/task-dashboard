import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Dashboard = ({ projects, tasks = [] }) => {
  return (
    <div className="container mx-auto p-4">
      {/* رأس الصفحة */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Projects Dashboard</h2>
        <Link
          to="/add-project"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Project
        </Link>
      </div>

      {/* حالة عدم وجود مشاريع */}
      {projects.length === 0 ? (
        <p>No projects available. Add a project to get started.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => {
            // عدد المهام الخاصة بكل مشروع
            const taskCount = tasks.filter(
              (t) => t.projectId === project.id
            ).length;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                taskCount={taskCount}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
