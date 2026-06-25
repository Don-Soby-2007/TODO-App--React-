import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { isDeadlinePassed } from "../utils/dateUtils";

const STORAGE_KEY = "todo_app_tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [editingTask, setEditingTask] = useState(null);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Check deadlines every 30 seconds
  useEffect(() => {
    const checkDeadlines = () => {
      setTasks((prev) =>
        prev.map((task) => {
          if (!task.completed && task.deadline && isDeadlinePassed(task.deadline)) {
            toast.error(`⏰ Deadline passed for: "${task.title}"`, {
              toastId: task.id,
            });
            return { ...task, completed: false, expired: true };
          }
          return task;
        })
      );
    };

    checkDeadlines(); // run once on mount
    const interval = setInterval(checkDeadlines, 30000);
    return () => clearInterval(interval);
  }, []);

  const addTask = useCallback((task) => {
    const newTask = {
      id: crypto.randomUUID(),
      ...task,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
    toast.success("Task added!");
  }, []);

  const updateTask = useCallback((id, updates) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
    toast.info("Task updated!");
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    toast.warning("Task deleted.");
  }, []);

  const toggleComplete = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }, []);

  const activeTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return {
    tasks,
    activeTasks,
    completedTasks,
    editingTask,
    setEditingTask,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
  };
};