import "../Header.scss";
import { NavLink } from "react-router-dom";

const HeaderMobile = ({ showBurger, setShowBurger }) => {
  return (
    <div
      className={
        showBurger
          ? "header-mobile-burger header-mobile-burger-show"
          : "header-mobile-burger"
      }
    >
      <div className="header-mobile-burger-wrapper">
        <div className="header-mobile-burger-top">

          <button className="Header-topline__options-btn">
            Свяжитесь с нами
          </button>
        </div>
        <div className="header-mobile-burger-list">
        <NavLink
        onClick={()=>{
            setShowBurger(false)
        }}
         className={({ isActive }) => (isActive ? "header-mobile-burger-list-link mobile-active" : "header-mobile-burger-list-link")}
         to="/">Главное</NavLink>
        <NavLink
           onClick={()=>{
            setShowBurger(false)
        }}
         className={({ isActive }) => (isActive ? "header-mobile-burger-list-link mobile-active" : "header-mobile-burger-list-link")}
         to="/community">О Сообществе</NavLink>
        <NavLink
           onClick={()=>{
            setShowBurger(false)
        }}
         className={({ isActive }) => (isActive ? "header-mobile-burger-list-link mobile-active" : "header-mobile-burger-list-link")}
         to="/events">Мероприятие</NavLink>
        <NavLink
           onClick={()=>{
            setShowBurger(false)
        }}
         className={({ isActive }) => (isActive ? "header-mobile-burger-list-link mobile-active" : "header-mobile-burger-list-link")}
         to="/membership">Членство</NavLink>
        <NavLink
           onClick={()=>{
            setShowBurger(false)
        }}
         className={({ isActive }) => (isActive ? "header-mobile-burger-list-link mobile-active" : "header-mobile-burger-list-link")}
         to="/education">Образование и сертификаты</NavLink>
        <NavLink
           onClick={()=>{
            setShowBurger(false)
        }}
         className={({ isActive }) => (isActive ? "header-mobile-burger-list-link mobile-active" : "header-mobile-burger-list-link")}
         to="/services">Услуги</NavLink>
        <NavLink
           onClick={()=>{
            setShowBurger(false)
        }}
         className={({ isActive }) => (isActive ? "header-mobile-burger-list-link mobile-active" : "header-mobile-burger-list-link")}
         to="/ambassadorship">Амбассадорство</NavLink>
        <NavLink
           onClick={()=>{
            setShowBurger(false)
        }}
         className={({ isActive }) => (isActive ? "header-mobile-burger-list-link mobile-active" : "header-mobile-burger-list-link")}
         to="/participation">Участие и волонтерство</NavLink>
        <NavLink
           onClick={()=>{
            setShowBurger(false)
        }}
         className={({ isActive }) => (isActive ? "header-mobile-burger-list-link mobile-active" : "header-mobile-burger-list-link")}
         to="/contacts">Контакты</NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
