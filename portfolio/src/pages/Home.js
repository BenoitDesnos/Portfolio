import Navigation from "../components/Navigation";
import logo from "../assets/img/logoPurple.png";
import { useState } from "react";

function Home() {
  const [animated, setAnimated] = useState(0);

  const handleClick = () => {
    alert("Are you sure you want to mess with that atom?");
    setAnimated(() => 1);
  };
  return (
    <main>
      <header>
        <img src={logo} alt="BENDES logo" className="header__logo" />
        <h1>Front-End Developper</h1>
        <span className="title size1">Looking for opportunities</span>
        <div
          className={
            animated === 1
              ? "header__background__container animated"
              : animated === 2
              ? "header__background__container hidden"
              : "header__background__container"
          }
          onClick={handleClick}
          onAnimationEnd={() => setAnimated(() => 2)}
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

        <div className="header__background__postAnim">
          <div className="orbitPostAnim"></div>
          <div className="orbitPostAnim"></div>
          <div className="orbitPostAnim"></div>
          <div
            className={
              animated === 2 ? "text__reveal  reveal" : "text__reveal  "
            }
          >
            <p>Oh no it's broken !</p>
          </div>
          <div
            className={
              animated === 2
                ? "text__reveal second reveal"
                : "text__reveal second "
            }
          >
            <p>
              Dont worry, we have the <strong>REACT</strong> developper for it.
            </p>
          </div>
        </div>
      </header>
      <Navigation />
    </main>
  );
}

export default Home;
