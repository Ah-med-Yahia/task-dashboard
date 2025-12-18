import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, status, deleteTask, moveTask, bgColor }) => {
  const getNextStatus = (currentStatus) => {
    if (currentStatus === 'todo') return 'in-progress';
    if (currentStatus === 'in-progress') return 'done';
    return null;
  };

  const nextStatus = getNextStatus(status);

  return (
    <div className={`${bgColor} rounded-lg p-4 min-h-96`}>
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
        <span>{title}</span>
        <span className="text-sm font-normal text-gray-500 bg-white px-2 py-1 rounded">
          {tasks.length}
        </span>
      </h2>

      <div className="space-y-3">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onMove={
              nextStatus
                ? () => moveTask(task.id, nextStatus)
                : null
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;