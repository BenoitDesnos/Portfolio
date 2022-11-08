import { useState, useEffect } from "react";
export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    if (window.scrollY < 30) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <a
      href="#top"
      className={showButton ? "scroll__to__top " : "scroll__to__top hidden"}
    >
      <i className="fa-solid fa-angle-up"></i>
    </a>
  );
}
