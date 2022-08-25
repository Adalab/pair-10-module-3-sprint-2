import { Link, Route, Routes } from "react-router-dom";

const Footer = (props) => {
return(
    <footer className="footer">
        <Routes>
        <Route path='/jugar' element={<jugar/>} />
        <Route path='/instructions' element={<instructions />} />
      </Routes>
      <nav>
        <ul>
          <li className="footer__menu-item">
            <Link className="footer__menu-link" to="/">A jugar</Link>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link active" href="#/instructions"
              >¿Cómo se juega?</a
            >
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#/options">Más opciones</a>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
);
}
export default Footer;