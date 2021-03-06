import { v4 as uuid } from "uuid";
import { updateLocalStorage } from "../../task/utils/task-utils";

export const addTask = (
  taskToEdit,
  tasks,
  modalValues,
  setErrorMessage,
  setTasks,
  onClose,
  isEditing
) => {
  const { title, description, time } = modalValues;

  const isValidated = getValidated(title, description, time, setErrorMessage);

  if (!isValidated) return;

  let updatedTaskList;
  if (isEditing) {
    const { id } = taskToEdit;
    updatedTaskList = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...taskToEdit,
          ...modalValues,
        };
      }

      return task;
    });
  } else {
    const newTask = {
      id: uuid(),
      title,
      description,
      time,
    };

    updatedTaskList = [...tasks, newTask];
  }

  setTasks(updatedTaskList);
  updateLocalStorage(updatedTaskList);
  onClose();
};

function getValidated(title, description, time, setErrorMessage) {
  const testTitle = /^[0-9]+$/.test(title);
  const testDescription = /^[0-9]+$/.test(description);

  if (title === "" || description === "" || time === "") {
    setErrorMessage("Please add all values");
    return false;
  } else if (testTitle) {
    setErrorMessage("Add proper title");
    return false;
  } else if (testDescription) {
    setErrorMessage("Add proper description");
    return false;
  }

  if (time > 60 || time < 0) {
    setErrorMessage("Time should be in between 0 and 60");
    return false;
  }

  return true;
}
