import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useTask } from "../../context/task-context";
import { useEscape } from "../../hooks";
import { updateLocalStorage } from "./utils/task-utils";
import { Modal } from "../Modal/Modal";
import { ReactPortal } from "../ReactPortal.js";

export function TaskCard({ task }) {
  const { title, id, description, time } = task;
  const [isEditing, setIsEditing] = useState(false);

  const { tasks, setTasks } = useTask();

  function handleEditTask() {
    setIsEditing((pre) => !pre);
  }

  function deleteTask(id) {
    const updatedTaskList = tasks.filter((task) => task.id !== id);

    setTasks(updatedTaskList);
    updateLocalStorage(updatedTaskList);
  }

  useEscape(setIsEditing);

  return (
    <section className="task-card flex justify-between align-center">
      <p className="task-title">{title}</p>
      <div>
        <button className="btn" onClick={handleEditTask}>
          <FaEdit className="pointer-cursor" />
        </button>
        <button className="btn ml-sm" onClick={() => deleteTask(id)}>
          <FaTrashAlt className="pointer-cursor" />
        </button>
      </div>

      {isEditing ? (
        <ReactPortal>
          <Modal
            taskToEdit={task}
            title={title}
            description={description}
            time={time}
            show={isEditing}
            onClose={handleEditTask}
            isEditing={true}
          ></Modal>
        </ReactPortal>
      ) : null}
    </section>
  );
}
