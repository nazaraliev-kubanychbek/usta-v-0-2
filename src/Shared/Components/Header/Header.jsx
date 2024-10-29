import { useState, useEffect } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.svg";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Header ${scrolled ? "Header-scrolled" : ""}`}>
      <div className="container row">
        {!scrolled ? (
          <>
            <div className="Header-topline">
              <div className="Header-topline__logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="Header-topline__options">
                <div className="Header-topline__options-btn">
                  Свяжитесь с нами
                </div>
              </div>
            </div>
            <nav>
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
            </nav>
          </>
        ) : (
          <>
            <div className="Header-scrolled-topline__logo">
              <img src={Logo} alt="Logo" />
            </div>
              <div className="Header-scrolled-elements">
                <div className="Header-scrolled-topline">
                  <div className="Header-scrolled-topline__options">
                    <div className="Header-scrolled-topline__options-btn">
                      Свяжитесь с нами
                    </div>
                  </div>
                </div>
              <nav>
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
              </nav>
              </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
