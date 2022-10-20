import Navigation from "../components/Navigation";
import logo from "../assets/img/logoPurple.png";
function Home() {
  return (
    <main>
      <header>
        <img src={logo} alt="BENDES logo" />
        <h1>Front-End Developper</h1>
        <span className="title size1">Looking for opportunities</span>
      </header>
      <Navigation />
    </main>
  );
}

export default Home;
