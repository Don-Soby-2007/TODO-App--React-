import { PencilLine, Trash2 } from "lucide-react";

function TaskCard() {
  return (
    <div>
      <div className="circle"></div>
      <div className="taskCard-head">Task 1</div>
      <div className="taskCard-date">25-06-2026</div>
      <div className="taskCard-btn">
        <button onClick={() => alert("edit")}>
          <PencilLine />
        </button>
        <button onClick={() => alert("delete")}>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
