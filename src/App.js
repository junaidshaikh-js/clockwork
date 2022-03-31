import { Routes, Route } from "react-router-dom";

import { Home, Task, Pomoclock, Header } from "./components";
import "./styles.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="/pomoclock" element={<Pomoclock />} />
      </Routes>
    </div>
  );
}

export default App;
