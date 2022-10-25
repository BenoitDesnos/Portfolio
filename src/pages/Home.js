import Navigation from "../components/Navigation";
import HeaderAnim from "../components/HeaderAnim";
import logo from "../assets/img/logo.svg";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import React, { useLayoutEffect, useState } from "react";

function Home() {
  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
  }

  return (
    <main>
      <Socials />
      <header className="header">
        <img src={logo} alt="BENDES logo" className="header__logo" />
        <div className="header__title">
          <h1>Front-End Developper</h1>
          <span className="size1">Looking for opportunities</span>
        </div>
        <HeaderAnim />
      </header>

      <Skills />
      <div className="separator" id="2"></div>
      <Projects />
      <div className="separator" id="3"></div>
      <Contacts />
      <Footer logo={logo} />
      <Navigation useWindowSize={useWindowSize()} />
    </main>
  );
}

export default Home;
