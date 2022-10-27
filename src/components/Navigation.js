import { useState, useEffect, useLayoutEffect } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(0);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  function handleScroll() {
    const menu2 = document.getElementById("2");
    const menu3 = document.getElementById("3");

    if (menu2.getBoundingClientRect().top >= 60) {
      setIsActive1(true);
      setIsActive2(false);
    } else if (
      menu2.getBoundingClientRect().top < 60 &&
      menu3.getBoundingClientRect().top >= 60
    ) {
      setIsActive1(false);
      setIsActive2(true);
      setIsActive3(false);
    } else if (menu3.getBoundingClientRect().top < 60) {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(true);
    } else {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
    }
  }

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  function handleMenu() {
    if (size >= 600) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (size >= 600) {
      setIsOpen(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [size]);

  return (
    <>
      <button
        aria-label="menu"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        className="nav__toggle"
      >
        <span className={isOpen ? "dots is-active" : "dots"}></span>
      </button>
      <nav className={isOpen ? "nav" : "nav hidden"}>
        <ul className={isOpen ? "nav__menu is-active" : "nav__menu"}>
          <li>
            <a
              href="#1"
              className={isActive1 ? "nav__active hover size3" : "hover size3"}
              onClick={handleMenu}
            >
              <span className={size < 600 && "change__color"}>
                Me connaitre
              </span>
            </a>
          </li>
          <li>
            <a
              href="#2"
              className={isActive2 ? "nav__active hover size3" : "hover size3"}
              onClick={handleMenu}
            >
              <span className={size < 600 && "change__color"}>Mes projets</span>
            </a>
          </li>
          <li>
            <a
              href="#3"
              className={isActive3 ? "nav__active hover size3" : "hover size3"}
              onClick={handleMenu}
            >
              <span className={size < 600 && "change__color"}>Me Joindre</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
