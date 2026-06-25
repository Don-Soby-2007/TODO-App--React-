import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, emptyMessage, onToggle, onDelete, onEdit }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-10 text-center text-slate-500">
        <p className="text-4xl mb-2">📭</p>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
