import React from "react";
import { formatDate, isDeadlinePassed } from "../utils/dateUtils";
import Deletebtn from "./Deletebtn";
import Editbtn from "./Editbtn";

const TaskCard = ({ task, onToggle, onDelete, onEdit }) => {
  const deadlinePassed = isDeadlinePassed(task.deadline);
  const isExpired = task.expired;

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-5 border-l-4 transition-all hover:shadow-lg ${
        task.completed
          ? isExpired
            ? "border-red-500 opacity-80"
            : "border-green-500 opacity-70"
          : deadlinePassed
            ? "border-orange-500"
            : "border-indigo-500"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="w-5 h-5 accent-indigo-600 cursor-pointer"
            />
            <h3
              className={`text-lg font-semibold ${
                task.completed
                  ? "line-through text-slate-400"
                  : "text-slate-800"
              }`}
            >
              {task.title}
            </h3>
          </div>
          {task.description && (
            <p className="text-sm text-slate-600 ml-8 mb-2">
              {task.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2 ml-8">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                deadlinePassed
                  ? "bg-red-100 text-red-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              ⏰ {formatDate(task.deadline)}
            </span>
            {isExpired && (
              <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">
                ⚠️ Expired
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          {!task.completed && <Editbtn onClick={() => onEdit(task)} />}
          <Deletebtn onClick={() => onDelete(task.id)} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
