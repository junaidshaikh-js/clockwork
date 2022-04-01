import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

import { Modal } from "../Modal/Modal";
import { ReactPortal } from "../ReactPortal.js";
import { TaskCard } from "./TaskCard";

export function Task() {
  const [show, setShow] = useState(false);

  const toggleModal = () => setShow((s) => !s);

  return (
    <main className="task-main p-1">
      <header className="bg-white p-1 mb-1">
        <h1 className="h2">Welcome back, Junaid!</h1>
        <p>You have 0 task for today.</p>
      </header>

      <section className="task-container bg-white p-1">
        <header className="flex align-center justify-between">
          <h2>To Do List</h2>
          <button className="btn" onClick={toggleModal}>
            <FaPlusCircle fontSize="1.4rem" color="var(--primary-color)" />
          </button>
        </header>
        <TaskCard title="Task 01" />
        <TaskCard title="Task 02" />
        <TaskCard title="Task 03" />
      </section>

      {show ? (
        <ReactPortal>
          <Modal show={show} onClose={toggleModal} setShow={setShow} />
        </ReactPortal>
      ) : null}
    </main>
  );
}
