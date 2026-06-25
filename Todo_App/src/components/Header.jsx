import React from "react";

const Header = ({ activeTab, setActiveTab, counts, onNewTask }) => {
  const tabs = [
    { id: "todo", label: "Active", count: counts.active },
    { id: "completed", label: "Completed", count: counts.completed },
  ];

  return (
    <header className="bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold">📝 My To-Do App</h1>
          <button
            onClick={onNewTask}
            className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-indigo-50 transition-all flex items-center gap-2"
          >
            <span className="text-xl">+</span> New Task
          </button>
        </div>

        <nav className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-white text-indigo-600 shadow-md"
                  : "bg-white/20 hover:bg-white/30 text-white"
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-black/20">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
