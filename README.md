<div align="center">

# 🚀 ToDo App

### *Frictionless Task Management. Zero-Gravity Productivity.*

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

</div>

---

## 🛸 Introduction

**ToDo App** is a time-aware, frictionless task manager built with React — engineered to keep your work orbiting around real deadlines, not lost in the void of forgotten lists.

Unlike static to-do apps, every task here has a heartbeat. Each one is bound to a **live countdown timer** that ticks in real time, automatically transitioning tasks to an "expired" state the moment time runs out. Combined with seamless **local storage persistence**, your mission plan survives browser restarts, tab closures, and system reboots — fully intact and ready for re-entry.

Whether you're a developer looking for a practical React codebase to study, or a professional seeking a clean, no-friction productivity tool, **ToDo App** delivers launch-ready features with zero configuration overhead.

---

## ✨ Key Features

### 📝 New Task — Title, Description & Deadline
Create a task in seconds by providing a **title**, an optional **description**, and a **deadline** — the moment the countdown clock begins its burn. The task is immediately registered in state and persisted to local storage, so it survives any turbulence. Every new entry hits the task list without a page reload, keeping the experience smooth and uninterrupted.

---

### ✏️ Edit Task — On-the-Fly Modifications
Need to course-correct? You can **modify a task's title, description, or deadline** at any point without triggering a page refresh. The timer adjusts seamlessly to the new deadline, re-synchronizing the countdown to your updated mission parameters. Changes are instantly reflected in the UI and written back to local storage to ensure nothing is lost.

---

### 🗑️ Delete Task — Clean UI & Interval Termination
Removing a task doesn't just erase it visually — it also **terminates the associated background timer interval**, preventing memory leaks and ghost processes. The UI updates instantly, keeping the task list clean and the application's performance in check. Think of it as a controlled deorbit: complete, clean, and precise.

---

### 💾 Local Storage — Real-Time Data Persistence
Your tasks are **automatically saved to the browser's `localStorage`** on every state change — no manual save button, no sync delay. This means your entire task board is fully restored across browser sessions, tab closes, and system restarts without any backend or authentication required. The persistence layer is wired directly into React state, ensuring the saved data and the rendered UI are always in perfect agreement.

---

### 🔔 Toast Notifications — Non-Blocking Animated Feedback
Every meaningful action — creating, editing, or deleting a task — triggers a **lightweight, animated toast notification** that appears and dismisses itself automatically. Notifications are non-blocking, meaning they never interrupt your workflow or demand interaction to close. This gives the app a polished, professional feel while keeping the user informed without friction.

---

### ⏱️ Time Setter & Countdown — Live Tick-by-Tick Timers
Each task runs its own **live countdown timer**, updated every second via a `setInterval` managed inside a `useEffect` hook. The time is displayed in a human-readable `HH:MM:SS` format, giving you a visceral, real-time sense of urgency and priority. The timer is cleanly initialized on task creation and recalculated on edits — always locked to the task's true deadline.

---

### 💀 Expired Tasks — Automatic State Transition & Visual Distinction
When a task's countdown reaches zero, it **automatically transitions to an "Expired" state** — no user action required. Expired tasks receive a distinct visual style (typically a muted color or strikethrough), separating them clearly from active tasks. The transition is handled entirely in state, ensuring the UI snaps to the new status the moment the last second ticks away.

---

## 📁 File Structure

```
todo-app/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── TaskCard.jsx          # Individual task display with timer
│   │   ├── TaskForm.jsx          # Create / Edit task form
│   │   ├── TaskList.jsx          # Maps and renders all TaskCards
│   │   ├── Toast.jsx             # Animated notification component
│   │   └── ToastContainer.jsx    # Manages toast queue and lifecycle
│   │
│   ├── hooks/
│   │   └── useTimer.js           # Custom hook: setInterval countdown logic
│   │
│   ├── App.jsx                   # Root component: state orchestration
│   ├── App.css                   # Global + component-scoped styles
│   ├── main.jsx                  # React DOM entry point
│   └── index.css                 # CSS resets and root variables
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🖥️ How to Clone & Run

Follow these terminal commands to get the project running locally:

```bash
# 1. Clone the repository
git clone https://github.com/Don-Soby-2007/TODO-App--React-.git

# 2. Navigate into the project directory
cd TODO-App--React-

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```

> The app will be live at **`http://localhost:5173`** (default Vite port). Open this URL in your browser and the countdown timers begin immediately.

---

## ⏳ Productivity & Timer Management

A to-do list without deadlines is just a wishlist. By **binding a live countdown timer to every task**, ToDo App transforms each entry from a passive note into an active obligation — one you can *see* ticking away in real time. This constant, ambient sense of urgency prevents tasks from drifting into the "I'll do it later" void that kills the utility of most task managers.

Under the hood, each timer is managed by a **`setInterval` call inside a `useEffect` hook**, scoped to the lifetime of the component. Critically, the `useEffect` returns a **cleanup function** (`clearInterval`) that fires when a task is deleted or the component unmounts — ensuring no orphaned intervals accumulate in the background, the app stays lean, and there is zero performance degradation no matter how many tasks are active.

---

## 🎓 Value for React Beginners

**ToDo App is a practical textbook** for developers just entering the React ecosystem. Its codebase is deliberately structured to teach core concepts through real, working examples — not abstract tutorials.

Here's what you'll learn by reading (and building) this project:

### 🔁 State Management & Unidirectional Data Flow
The app's entire task list lives in `useState` at the root `App.jsx` level, and is passed down as `props` to child components. This makes **React's one-way data flow** immediately visible: data flows down through props, and events flow up through callback functions — the fundamental mental model every React developer must internalize.

### 🔄 Component Lifecycles & Cleanup with `useEffect`
The `useTimer` hook uses `useEffect` to **start a `setInterval` when a component mounts and clear it when the component unmounts**. This teaches one of the most important React patterns: managing side effects with proper cleanup to avoid bugs and memory leaks. Understanding this pattern is the gateway to working with APIs, subscriptions, and async operations in React.

### 🌐 Integrating Browser APIs — `localStorage`
The project demonstrates how to **read from and write to `localStorage`** in sync with React state — a practical pattern used in almost every real-world React application. You'll see how to serialize state with `JSON.stringify` and rehydrate it with `JSON.parse` on load, teaching you how React applications bridge the gap between in-memory state and browser-level persistence.

### 🏗️ Clean Architectural Boundaries — Separating UI from Logic
Business logic (the timer countdown) is extracted into a **custom hook `useTimer`**, keeping `TaskCard.jsx` clean and focused purely on rendering. This separation of concerns is the hallmark of professional, maintainable React code. By studying this boundary, beginners learn how to architect components that are easy to test, reuse, and reason about.

---

## 📜 License

This project is open source and available under the [MIT License](./LICENSE).

---

<div align="center">

**Built with ⚛️ React · Powered by ⚡ Vite · Engineered for 🚀 Zero-Gravity Productivity**

*If this project helped you, consider leaving a ⭐ — it means a lot!*

</div>
