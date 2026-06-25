import React from "react";
import TaskForm from "../components/TaskForm";

const CreatTaskFrom = ({ onSubmit, editingTask, onCancelEdit }) => {
  return (
    <div className="max-w-xl mx-auto">
      <TaskForm
        onSubmit={onSubmit}
        editingTask={editingTask}
        onCancelEdit={onCancelEdit}
      />
    </div>
  );
};

export default CreatTaskFrom;
