import { useState, useEffect } from "react";
import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../Images/logo.svg";
//import PopUp from './Float/PopUp'
function Header() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const scrollToBottom = (duration = 500) => {
        const start = window.pageYOffset;
        const end = document.body.scrollHeight - window.innerHeight;
        const distance = end - start;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, start + distance * progress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <div className="container">
            <div className={`Header ${scrolled ? "Header-scrolled" : ""}`}>
                <div className="row">
                    {!scrolled ? (
                        <>
                            <div className="Header-topline">
                                <div className="Header-topline__logo">
                                    <img src={Logo} alt="Logo" />
                                </div>
                                <div className="Header-topline__options">
                                    <button className="Header-topline__options-btn" >
                                        Свяжитесь с нами
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/">Главное</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/community">О сообществе</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/events">Мероприятие</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/membership">Членство</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/education">Образование и сертификаты</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/services">Услуги</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/ambassadorship">Амбассадорство</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/participation">Участие в проектах</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/contacts">Контакты</NavLink>
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
                                            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/">Главное</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/community">О сообществе</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/events">Мероприятие</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/membership">Членство</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/education">Образование и сертификаты</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/services">Услуги</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/ambassadorship">Амбассадорство</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/participation">Участие в проектах</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to="/contacts">Контакты</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
