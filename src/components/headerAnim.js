
import { useState } from "react";

function HeaderAnim() {
  const [animated, setAnimated] = useState(0);

  const handleClick = () => {
    alert("Are you sure you want to mess with that atom?");
    setAnimated(() => 1);
    setTimeout(() => {
      setAnimated(() => 2);
    }, 10000);
  };
  return (
    <>
      <div
        className={
          animated === 1
            ? "header__background__container animated"
            : animated === 2
            ? "header__background__container hidden"
            : "header__background__container"
        }
        onClick={handleClick}
      >
        <div className={animated ? "core animated" : "core"}></div>
        <div className="orbit">
          <div className="electron"></div>
        </div>
        <div className="orbit">
          <div className="electron"></div>
        </div>
        <div className="orbit">
          <div className="electron"></div>
        </div>
      </div>

      <div
        className={
          animated === 2
            ? "header__background__postAnim"
            : "header__background__postAnim hidden"
        }
      >
        <div className="orbitPostAnim"></div>
        <div className="orbitPostAnim"></div>
        <div className="orbitPostAnim"></div>
        <div
          className={animated === 2 ? "text__hidden reveal" : "text__hidden  "}
        >
          <p>Oh no it's broken !</p>
        </div>
        <div
          className={
            animated === 2
              ? "text__hidden second reveal "
              : "text__hidden second "
          }
        >
          <p>
            Dont worry, we have the <strong>REACT</strong> developper for it.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeaderAnim;
