import Navigation from "../components/Navigation";
import HeaderAnim from "../components/headerAnim";
import logo from "../assets/img/logo.svg";

function Home() {
  return (
    <main>
      <header className="header">
        <img src={logo} alt="BENDES logo" className="header__logo" />
        <div className="header__title">
          <h1>Front-End Developper</h1>
          <span className="size1">Looking for opportunities</span>
        </div>
        <HeaderAnim />
      </header>
      <Navigation />
    </main>
  );
}

export default Home;
