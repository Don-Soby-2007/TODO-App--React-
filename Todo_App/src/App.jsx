import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Todo from "./pages/Todo";
import Completed from "./pages/Completed";
import CreatTaskFrom from "./pages/CreatTaskFrom";
import { useTasks } from "./hooks/useTasks";

function App() {
  const [activeTab, setActiveTab] = useState("todo");
  const {
    activeTasks,
    completedTasks,
    editingTask,
    setEditingTask,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
  } = useTasks();

  const handleFormSubmit = (idOrData, maybeData) => {
    if (typeof idOrData === "string") {
      // update
      updateTask(idOrData, maybeData);
    } else {
      // add
      addTask(idOrData);
    }
    setActiveTab("todo");
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setActiveTab("create");
  };

  return (
    <div className="min-h-screen">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        counts={{
          active: activeTasks.length,
          completed: completedTasks.length,
        }}
      />

      <main className="max-w-5xl mx-auto px-6 py-8">
        {activeTab === "todo" && (
          <Todo
            tasks={activeTasks}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            onEdit={handleEdit}
          />
        )}

        {activeTab === "completed" && (
          <Completed
            tasks={completedTasks}
            onToggle={toggleComplete}
            onDelete={deleteTask}
          />
        )}

        {activeTab === "create" && (
          <CreatTaskFrom
            onSubmit={handleFormSubmit}
            editingTask={editingTask}
            onCancelEdit={() => {
              setEditingTask(null);
              setActiveTab("todo");
            }}
          />
        )}
      </main>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
