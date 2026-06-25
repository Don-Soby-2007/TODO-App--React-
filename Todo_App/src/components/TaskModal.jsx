import React, { useEffect } from "react";
import TaskForm from "./TaskForm";

const TaskModal = ({ isOpen, onClose, onSubmit, editingTask }) => {
  // Close modal when pressing 'Escape'
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg animate-modal-in"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-5 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">
            {editingTask ? "✏️ Edit Task" : "➕ Create New Task"}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-2xl leading-none transition"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5">
          <TaskForm
            onSubmit={onSubmit}
            editingTask={editingTask}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
