import { Link, Route, Routes } from "react-router-dom";

const Footer = (props) => {
  return (
    <div>
      <footer className="footer">
        <Routes>
          <Route path="/jugar" element={<jugar />} />
          <Route path="/instructions" element={<instructions />} />
        </Routes>
        <nav>
          <ul>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/jugar">
                A jugar
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link active" to="/instructions">
                ¿Cómo se juega?
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="#/options">
                Más opciones
              </Link>
            </li>
          </ul>
        </nav>
        <small className="footer__copy">© Adalab</small>
      </footer>
    </div>
  );
};
export default Footer;
