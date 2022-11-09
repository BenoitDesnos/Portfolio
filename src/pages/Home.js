import Navigation from "../components/Navigation";
import HeaderAnim from "../components/HeaderAnim";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import ScrollToTop from "../components/ScrollToTop";

function Home({ logo, projectsData, size }) {
  return (
    <main>
      <Socials />
      <header className="header" id="top">
        <img src={logo} alt="BENDES logo" className="header__logo" />
        <div className="header__title">
          <h1>Front-End Developper</h1>
          <span className="size1">Looking for opportunities</span>
        </div>
        <HeaderAnim />
      </header>

      <Skills />
      <div className="separator" id="2"></div>
      <Projects projectsData={projectsData} />
      <div className="separator" id="3"></div>
      <Contacts />
      <Footer logo={logo} />
      <Navigation size={size} />
      <ScrollToTop />
    </main>
  );
}

export default Home;
