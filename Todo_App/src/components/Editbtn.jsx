import React from "react";

function Editbtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
      title="Edit"
    >
      ✏️
    </button>
  );
}

export default Editbtn;
