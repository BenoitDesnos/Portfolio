function Footer({ logo }) {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="bendes logo" />
      </div>
      <p className="footer__reserves">© BENDES, all rights reserved</p>
      <ul className="footer__language">
        <li>
          <a href="/">EN</a>
        </li>
        <span>•</span>
        <li>
          <a href="/"> FR</a>
        </li>
      </ul>
      <ul className="socials">
        <li>
          <a href="/">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>

        <li>
          <a href="/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
