import React from "react";
import TaskList from "../components/TaskList";

const Completed = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        ✅ Completed Tasks ({tasks.length})
      </h2>
      <TaskList
        tasks={tasks}
        emptyMessage="No completed tasks yet. Keep going! 💪"
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={() => {}}
      />
    </div>
  );
};

export default Completed;
