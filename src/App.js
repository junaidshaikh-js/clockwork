import { Routes, Route } from "react-router-dom";

import { Home, Task, Pomoclock } from "./components";
import "./style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="/pomoclock" element={<Pomoclock />} />
      </Routes>
    </>
  );
}

export default App;
