import logo from "../../Images/logo.svg";
import "./footer.scss";


import insta from '../../Images/social/instagram.png'
import linkedIn from '../../Images/social/linkedin.png'
import telegram from '../../Images/social/telegram.png'
import youtube from '../../Images/social/YouTube.png'

import { NavLink } from "react-router-dom";
import BYGEEKSPRO from '../../Images/BY GEEKS PRO.png';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        //behavior: "smooth"
    });
};

const Footer = () => {
    return (
        <div className="padding-top-50px">
            <div className="footer">
                <div className="container">
                    <div className="footer-elements">
                        <div className="footer-elements-column">
                            <img className="footer-elements-logo" src={logo} alt="Logo" />
                        </div>
                        <div className="footer-elements-column">
                            <h1>Навигация</h1>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => (isActive ? "isActive" : "")}
                                        onClick={scrollToTop}
                                    >
                                        Главное
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/community"
                                        className={({ isActive }) => (isActive ? "isActive" : "")}
                                        onClick={scrollToTop}
                                    >
                                        О сообществе
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/events"
                                        className={({ isActive }) => (isActive ? "isActive" : "")}
                                        onClick={scrollToTop}
                                    >
                                        Мероприятие
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/membership"
                                        className={({ isActive }) => (isActive ? "isActive" : "")}
                                        onClick={scrollToTop}
                                    >
                                        Членство
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/education"
                                        className={({ isActive }) => (isActive ? "isActive" : "")}
                                        onClick={scrollToTop}
                                    >
                                        Образование и сертификаты
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-elements-column">
                            <ul style={{ paddingTop: "43px" }}>
                                <li>
                                    <NavLink
                                        to="/services"
                                        className={({ isActive }) => (isActive ? "isActive" : "")}
                                        onClick={scrollToTop}
                                    >
                                        Услуги
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/ambassadorship"
                                        className={({ isActive }) => (isActive ? "isActive" : "")}
                                        onClick={scrollToTop}
                                    >
                                        Амбассадорство
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/participation"
                                        className={({ isActive }) => (isActive ? "isActive" : "")}
                                        onClick={scrollToTop}
                                    >
                                        Участие в проектах
                                    </NavLink>
                                </li>
                                {/*<li>*/}
                                {/*    <NavLink*/}
                                {/*        to="/contacts"*/}
                                {/*        className={({ isActive }) => (isActive ? "isActive" : "")}*/}
                                {/*        onClick={scrollToTop}*/}
                                {/*    >*/}
                                {/*        Контакты*/}
                                {/*    </NavLink>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        <div id="contacts" className="footer-elements-column-contacts">
                            <h1>Контакты</h1>
                            <a href="tel:+996755405666">+996 755 405 666</a>
                            <a href="mailto:usta.community@gmail.com">usta.community@gmail.com</a>
                            <div className="footer-elements-contacts">
                                <a href="https://www.instagram.com/usta_international/">
                                    <img className="footer-elements-contacts-web" src={insta} alt="Instagram" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=_LTyF2adV_8&list=PLr-7qpmyaPYyWxZRjb9NcXDh64hLS_6wA">
                                    <img className="footer-elements-contacts-web" src={youtube} alt="YouTube" />
                                </a>
                                <a href="https://t.me/usta_media">
                                    <img className="footer-elements-contacts-web" src={telegram} alt="Telegram" />
                                </a>
                                <img className="footer-elements-contacts-web" src={linkedIn} alt="LinkedIn" />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "16px", height: "auto" }}>
                        <a href="https://geeks.kg/geeks-pro">
                            <img src={BYGEEKSPRO} alt="BY GEEKS PRO" />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;
