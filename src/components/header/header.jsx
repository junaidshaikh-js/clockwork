import { useEffect, useState } from "react";
import { FaBars, FaClock, FaTimes, FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));

  function toggleMenu() {
    setIsVisible((v) => !v);
  }

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? null : "dark"));
  }

  return (
    <header className="header flex p-1 align-center">
      <div className="hamburger-menu pointer-cursor">
        <FaBars fontSize={"2rem"} onClick={toggleMenu} />
      </div>

      <nav className={`nav ${isVisible && "show"} `}>
        <div className="logo ml-2">
          <Link to="/">Clockwork</Link>
        </div>

        <ul className="nav-links flex flex-column justify-center ml-2">
          <li>
            <Link to="/task" className="task-link">
              <FaClock /> Task
            </Link>
          </li>
          <li className="pointer-cursor" onClick={toggleTheme}>
            {theme ? (
              <span>
                <FaMoon /> Dark Mode
              </span>
            ) : (
              <span>
                <MdOutlineLightMode /> Light Mode
              </span>
            )}
          </li>
        </ul>

        <span className="close-nav">
          <FaTimes fontSize="1.5rem" onClick={toggleMenu} />
        </span>
      </nav>
    </header>
  );
}
