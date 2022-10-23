import Navigation from "../components/Navigation";
import HeaderAnim from "../components/HeaderAnim";
import logo from "../assets/img/logo.svg";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useRef } from "react";
import Contacts from "../components/Contacts";

function Home() {
  const skills = useRef(null);

  const handleClick = () => {
    skills.current?.scrollIntoView({ behavior: "smooth" });
    console.log("test");
  };

  return (
    <main>
      <header className="header">
        <img src={logo} alt="BENDES logo" className="header__logo" />
        <div className="header__title" onClick={handleClick}>
          <h1>Front-End Developper</h1>
          <span className="size1">Looking for opportunities</span>
        </div>
        <HeaderAnim />
      </header>
      <Skills />
      <Projects skills={skills} />
      <Contacts />
      <Navigation handleClick={handleClick} />
    </main>
  );
}

export default Home;
