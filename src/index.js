import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { TaskProvider } from "./context/task-context";

// new API in react 18 for rendering
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <TaskProvider>
        <App />
      </TaskProvider>
    </Router>
  </React.StrictMode>
);
