import { FaPlusCircle } from "react-icons/fa";
import { TaskCard } from "./TaskCard";

export function Task() {
  return (
    <main className="task-main p-1">
      <header className="bg-white p-sm mb-1">
        <h1 className="h2">Welcome back, Junaid!</h1>
        <p>You have 0 task for today.</p>
      </header>

      <section className="task-container bg-white p-sm">
        <header className="flex align-center justify-between">
          <h2>To Do List</h2>
          <button className="btn">
            <FaPlusCircle fontSize="1.4rem" color="var(--primary-color)" />
          </button>
        </header>

        <TaskCard title="Task 01" />
        <TaskCard title="Task 02" />
        <TaskCard title="Task 03" />
      </section>
    </main>
  );
}
