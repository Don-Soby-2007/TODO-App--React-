import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import TaskModal from "./components/TaskModal";
import Todo from "./pages/Todo";
import Completed from "./pages/Completed";
import { useTasks } from "./hooks/useTasks";

function App() {
  const [activeTab, setActiveTab] = useState("todo");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Modal Handlers
  const openModal = (task = null) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  const handleFormSubmit = (idOrData, maybeData) => {
    if (typeof idOrData === "string") {
      updateTask(idOrData, maybeData);
    } else {
      addTask(idOrData);
    }
    closeModal();
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
        onNewTask={() => openModal()}
      />

      <main className="max-w-5xl mx-auto px-6 py-8">
        {activeTab === "todo" && (
          <Todo
            tasks={activeTasks}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            onEdit={openModal} // Opens modal with task data
          />
        )}

        {activeTab === "completed" && (
          <Completed
            tasks={completedTasks}
            onToggle={toggleComplete}
            onDelete={deleteTask}
          />
        )}
      </main>

      {/* The Modal Component */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        editingTask={editingTask}
      />

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
