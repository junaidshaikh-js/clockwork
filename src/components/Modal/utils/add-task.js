import { v4 as uuid } from "uuid";

export const addTask = (
  modalValue,
  setErrorMessage,
  setTasks,
  updateTask,
  onClose
) => {
  const { title, description, time } = modalValue;

  const isValidated = getValidated(title, description, time, setErrorMessage);

  if (!isValidated) return;

  const newTask = {
    id: uuid(),
    title,
    description,
    time,
  };

  setTasks((t) => {
    return [...t, newTask];
  });

  updateTask(newTask);
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

  return true;
}
