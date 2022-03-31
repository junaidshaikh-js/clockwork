import { useState } from "react";
import { FaBars, FaClock, FaTimes } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleMenu() {
    setIsVisible((v) => !v);
  }

  // TODO: handle theme change
  function toggleTheme() {
    console.log("toggling theme");
  }

  return (
    <header className="header flex p-1 align-center">
      <div className="hamburger-menu pointer-cursor">
        <FaBars color="hsl(0, 0%, 7%)" fontSize={"2rem"} onClick={toggleMenu} />
      </div>

      <nav className={`nav ${isVisible && "show"} `}>
        <div className="logo ml-2">
          <Link to="/">Clockwork</Link>
        </div>

        <ul className="nav-links flex flex-column justify-center ml-2">
          <li>
            <Link to="/task">
              <FaClock /> Task
            </Link>
          </li>
          <li className="pointer-cursor" onClick={toggleTheme}>
            <span>
              <MdOutlineLightMode /> Light Mode
            </span>
          </li>
        </ul>

        <span className="close-nav">
          <FaTimes fontSize="1.5rem" onClick={toggleMenu} />
        </span>
      </nav>
    </header>
  );
}
