import logo from "../../Images/logo.svg";
import "./footer.scss";

import youtube from "../../Images/youtube.jpg";
import insta from "../../Images/insta.jpg";
import telegram from "../../Images/telegram.png";
import linkedIn from "../../Images/linkedin.png";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-elements">
          <div className="footer-elements-column">
            <img className="footer-elements-logo" src={logo} />
          </div>
          <div className="footer-elements-column">
            <h1>Навигация</h1>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  Главное
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/community"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  О сообществе
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  Мероприятие
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/membership"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  Членство
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  Образование и сертификаты
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-elements-column">
            <ul style={{paddingTop:"43px"}}>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  Услуги
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ambassadorship"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  Амбассадорство
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/participation"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  Участие и волонтерство
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                >
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>
          <div id="contacts" className="footer-elements-column-contacts">
            <h1>Контакты</h1>
            <a href="tel:+996559044072">+996 559 044 072</a>
            <a href="mailto:example@example.com">saske8182@gmail.com</a>
            <div className="footer-elements-contacts">
              <img className="footer-elements-contacts-web" src={insta} />
              <img className="footer-elements-contacts-web" src={youtube} />
              <img className="footer-elements-contacts-web" src={telegram} />
              <img className="footer-elements-contacts-web" src={linkedIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
