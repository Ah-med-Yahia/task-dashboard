import { Trash2, MoveRight } from 'lucide-react';

const TaskCard = ({ task, onDelete, onMove }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-md transition">
      <h4 className="font-semibold text-gray-800 mb-2">
        {task.title}
      </h4>

      <p className="text-sm text-gray-600 mb-3">
        {task.description}
      </p>

      <div className="flex items-center justify-between">
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition"
          title="Delete task"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        {onMove && (
          <button
            onClick={onMove}
            className="text-blue-600 hover:text-blue-800 transition flex items-center space-x-1 text-sm"
            title="Move to next column"
          >
            <span>Move</span>
            <MoveRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;