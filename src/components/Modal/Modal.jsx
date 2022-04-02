import { useState } from "react";

import { useEscape, useTitle } from "../../hooks";
import { addTask } from "./utils/add-task";
import { HiddenLabel } from "./HiddenLabel";
import { useTask } from "../../context/task-context";

export function Modal({
  show,
  onClose,
  setShow,
  title = "",
  description = "",
  time = "",
  isEditing,
  taskToEdit,
}) {
  const [modalValues, setModalValues] = useState({
    title,
    description,
    time,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { tasks, setTasks } = useTask();

  useEscape(setShow);
  useTitle("Add task | Clockwork");

  const handleModalChange = (e) => {
    const { id: key, value } = e.target;
    setModalValues((m) => {
      return { ...m, [key]: value };
    });
  };

  return (
    <div className={`modal-wrapper ${show && "show"}`} onClick={onClose}>
      <article
        className="modal bg-white p-1"
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <HiddenLabel labelFor="title" text="Title" />
          <input
            type="text"
            placeholder="Add Title"
            id="title"
            value={modalValues.title}
            onChange={handleModalChange}
          />
        </header>
        <section>
          <HiddenLabel labelFor="description" text="Description" />
          <textarea
            cols="30"
            rows="10"
            id="description"
            placeholder="Add Description"
            value={modalValues.description}
            onChange={handleModalChange}
          ></textarea>

          <HiddenLabel labelFor="time" text="Time" />
          <input
            id="time"
            type="number"
            className="number"
            placeholder="Time in Minutes"
            value={modalValues.time}
            onChange={handleModalChange}
          />
        </section>
        <footer className="flex justify-between mt-1">
          <button className="btn btn-secondary-outline" onClick={onClose}>
            Close
          </button>
          <button
            className="btn btn-primary-outline light"
            onClick={() =>
              addTask(
                taskToEdit,
                tasks,
                modalValues,
                setErrorMessage,
                setTasks,
                onClose,
                isEditing
              )
            }
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </footer>

        {/* TODO: update error message with toast */}
        {<span className="modal-error info-danger">{errorMessage}</span>}
      </article>
    </div>
  );
}
