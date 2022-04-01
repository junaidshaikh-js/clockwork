import { createContext, useContext, useState } from "react";

const TaskContext = createContext([[], () => {}]);

const useTask = () => useContext(TaskContext);

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const value = { tasks, setTasks };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export { TaskProvider, useTask };
