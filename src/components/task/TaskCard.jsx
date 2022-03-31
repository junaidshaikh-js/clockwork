import { FaEdit, FaTrashAlt } from "react-icons/fa";

export function TaskCard({ title }) {
  return (
    <section className="task-card flex justify-between align-center">
      <p className="task-title">{title}</p>
      <div className="mr-1">
        <FaEdit style={{ marginRight: "1rem", cursor: "pointer" }} />
        <FaTrashAlt style={{ cursor: "pointer" }} />
      </div>
    </section>
  );
}
