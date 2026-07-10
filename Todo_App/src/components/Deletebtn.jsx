import React from "react";

function Deletebtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
      title="Delete"
    >
      🗑️
    </button>
  );
}

export default Deletebtn;
