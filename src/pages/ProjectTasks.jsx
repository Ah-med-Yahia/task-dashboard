import TaskColumn from '../components/TaskColumn';

const ProjectTasks = ({ tasks, deleteTask, moveTask }) => {
  const todo = tasks.filter(t => t.status === 'todo');
  const inProgress = tasks.filter(t => t.status === 'in-progress');
  const done = tasks.filter(t => t.status === 'done');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <TaskColumn
        title="To Do"
        tasks={todo}
        status="todo"
        deleteTask={deleteTask}
        moveTask={moveTask}
        bgColor="bg-gray-100"
      />

      <TaskColumn
        title="In Progress"
        tasks={inProgress}
        status="in-progress"
        deleteTask={deleteTask}
        moveTask={moveTask}
        bgColor="bg-blue-50"
      />

      <TaskColumn
        title="Done"
        tasks={done}
        status="done"
        deleteTask={deleteTask}
        moveTask={moveTask}
        bgColor="bg-green-50"
      />
    </div>
  );
};

export default ProjectTasks;