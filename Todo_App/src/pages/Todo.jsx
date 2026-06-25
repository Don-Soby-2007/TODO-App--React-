import React from "react";
import TaskList from "../components/TaskList";

const Todo = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        🎯 Active Tasks ({tasks.length})
      </h2>
      <TaskList
        tasks={tasks}
        emptyMessage="No active tasks. Enjoy your free time! 🎉"
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default Todo;
