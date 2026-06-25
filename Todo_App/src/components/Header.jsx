import React from "react";

const Header = ({ activeTab, setActiveTab, counts }) => {
  const tabs = [
    { id: "todo", label: "Active", count: counts.active },
    { id: "completed", label: "Completed", count: counts.completed },
    { id: "create", label: "+ New Task" },
  ];

  return (
    <header className="bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold mb-4">📝 My To-Do App</h1>
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
