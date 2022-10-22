import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        className="nav__toggle"
      >
        <span className={isOpen ? "dots is-active" : "dots"}></span>
      </button>
      <nav className={isOpen ? "nav" : "nav hidden"}>
        <ul className={isOpen ? "nav__menu is-active" : "nav__menu"}>
          <li>
            <NavLink
              to="/"
              end
              className={(nav) =>
                nav.isActive ? "nav__active hover size3" : "hover size3"
              }
            >
              Me découvrir
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/b"
              className={(nav) =>
                nav.isActive ? "nav__active hover size3" : "hover size3"
              }
            >
              Mes projets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/b"
              className={(nav) =>
                nav.isActive ? "nav__active hover size3" : "hover size3"
              }
            >
              Me Joindre
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
