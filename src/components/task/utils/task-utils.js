export function getTask() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

  return tasks;
}

export function updateTask(task) {
  const tasks = getTask();

  const updatedTasks = [...tasks, task];

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  return updatedTasks;
}
