import { useState } from "react";

import { useEscape } from "../../hooks";
import { updateTask } from "../task/utils/task-utils";
import { addTask } from "./utils/add-task";
import { HiddenLabel } from "./HiddenLabel";

export function Modal({
  show,
  onClose,
  setShow,
  title = "",
  description = "",
  time = "",
  setTasks,
}) {
  const [modalValue, setModalValue] = useState({
    title,
    description,
    time,
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEscape(setShow);

  const handleModalChange = (e) => {
    const { id: key, value } = e.target;
    setModalValue((m) => {
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
            value={modalValue.title}
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
            value={modalValue.description}
            onChange={handleModalChange}
          ></textarea>

          <HiddenLabel labelFor="time" text="Time" />
          <input
            id="time"
            type="number"
            className="number"
            placeholder="Time in Minutes"
            value={modalValue.time}
            onChange={handleModalChange}
          />
        </section>
        <footer className="flex justify-between mt-1">
          <button className="btn btn-secondary-outline" onClick={onClose}>
            Close
          </button>
          <button
            className="btn btn-primary-outline"
            onClick={() =>
              addTask(
                modalValue,
                setErrorMessage,
                setTasks,
                updateTask,
                onClose
              )
            }
          >
            Add
          </button>
        </footer>

        {/* TODO: update error message with toast */}
        {<span className="modal-error info-danger">{errorMessage}</span>}
      </article>
    </div>
  );
}
