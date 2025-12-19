import { useParams } from 'react-router-dom';
import TaskColumn from '../components/TaskColumn';

const ProjectTasks = ({ tasks, deleteTask, moveTask, updateTaskStatus, editTask }) => {
  const { id } = useParams();
  const projectId = Number(id);

  
  const projectTasks = tasks.filter(task => task.projectId === projectId);

  const todo = projectTasks.filter(t => t.status === 'todo');
  const inProgress = projectTasks.filter(t => t.status === 'in-progress');
  const done = projectTasks.filter(t => t.status === 'done');

  return (
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
  );
};

export default ProjectTasks;
