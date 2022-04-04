import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useTask } from "../../context/task-context";
import { useEscape } from "../../hooks";
import { updateLocalStorage } from "./utils/task-utils";
import { Modal } from "../Modal/Modal";
import { ReactPortal } from "../ReactPortal.js";
import { Link } from "react-router-dom";

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
    <div className="task-wrapper">
      <section className="task-card flex justify-between align-center">
        <Link to="/pomoclock" state={{ task }} className="task-link">
          <p className="task-title">{title}</p>
        </Link>
        <div className="flex">
          <button className="btn" onClick={handleEditTask}>
            <FaEdit
              className="pointer-cursor"
              fontSize="1.1rem"
              title="Edit task"
            />
          </button>
          <button className="btn ml-sm" onClick={() => deleteTask(id)}>
            <FaTrashAlt
              className="pointer-cursor"
              fontSize="1.1rem"
              title="Delete Task"
            />
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
    </div>
  );
}
