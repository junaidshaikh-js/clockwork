import { FaEdit, FaTrashAlt } from "react-icons/fa";

export function TaskCard({ title }) {
  return (
    <section className="task-card flex justify-between align-center">
      <p className="task-title">{title}</p>
      <div className="mr-1">
        <FaEdit className="mr-1 pointer-cursor" />
        <FaTrashAlt className="pointer-cursor" />
      </div>
    </section>
  );
}
