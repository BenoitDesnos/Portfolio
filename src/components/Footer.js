import Socials from "./Socials";

function Footer({ logo }) {
  function builderAnonncer(e) {
    alert("in building process, thanks for your understanding");
    e.preventdefault();
  }

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="bendes logo" />
      </div>
      <p className="footer__reserves">© BENDES, all rights reserved</p>
      <ul className="footer__language">
        <li>
          <a href="/" onClick={builderAnonncer}>
            EN
          </a>
        </li>
        <span>•</span>
        <li>
          <a href="/"> FR</a>
        </li>
      </ul>
      <Socials />
    </footer>
  );
}

export default Footer;
