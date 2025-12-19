import { useParams } from 'react-router-dom';
import TaskColumn from '../components/TaskColumn';
import { useState } from "react";


const ProjectTasks = ({ tasks, deleteTask, moveTask, updateTaskStatus, editTask }) => {
  const { id } = useParams();
  const projectId = Number(id);
  const [searchTerm, setSearchTerm] = useState("");
  const projectTasks = tasks.filter(task => task.projectId === projectId);


  const filteredTasks = projectTasks.filter(task =>
  task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  task.description.toLowerCase().includes(searchTerm.toLowerCase())
);


const todo = filteredTasks.filter(t => t.status === 'todo');
const inProgress = filteredTasks.filter(t => t.status === 'in-progress');
const done = filteredTasks.filter(t => t.status === 'done');


  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskColumn
          title="To Do"
          tasks={todo}
          status="todo"
          deleteTask={deleteTask}
          updateTaskStatus={updateTaskStatus}
          editTask={editTask}
          bgColor="bg-gray-100"
        />
        <TaskColumn
          title="In Progress"
          tasks={inProgress}
          status="in-progress"
          deleteTask={deleteTask}
          updateTaskStatus={updateTaskStatus}
          editTask={editTask}
          bgColor="bg-blue-50"
        />
        <TaskColumn
          title="Done"
          tasks={done}
          status="done"
          deleteTask={deleteTask}
          updateTaskStatus={updateTaskStatus}
          editTask={editTask}
          bgColor="bg-green-50"
        />
      </div>
    </>
  );
};

export default ProjectTasks;
