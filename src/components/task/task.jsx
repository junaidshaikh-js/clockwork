import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

import { Modal } from "../Modal/Modal";
import { ReactPortal } from "../ReactPortal.js";
import { TaskCard } from "./TaskCard";
import { getTask } from "./utils/task-utils";

export function Task() {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleModal = () => setShow((s) => !s);

  useEffect(() => {
    setTasks(getTask());
  }, []);

  return (
    <main className="task-main p-1">
      <header className="bg-white p-1 mb-1">
        <h1 className="h2">Welcome back, Junaid!</h1>
        <p>You have {tasks.length} task for today.</p>
      </header>

      <section className="task-container bg-white p-1">
        <header className="flex align-center justify-between">
          <h2>To Do List</h2>
          <button className="btn" onClick={toggleModal}>
            <FaPlusCircle fontSize="1.4rem" color="var(--primary-color)" />
          </button>
        </header>
        {tasks.map((task) => {
          return <TaskCard title={task.title} key={task.id} />;
        })}
      </section>

      {show ? (
        <ReactPortal>
          <Modal
            show={show}
            onClose={toggleModal}
            setShow={setShow}
            setTasks={setTasks}
          />
        </ReactPortal>
      ) : null}
    </main>
  );
}
