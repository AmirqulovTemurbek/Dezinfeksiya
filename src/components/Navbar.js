import Logo from "../images/Logo.png";
import React, { useState, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useTranslation } from 'react-i18next';
import { FaTimes, FaBars} from "react-icons/fa";
import "../scss/main.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
    setShowMenu(!showMenu);
    };

    const {t, i18n} = useTranslation();

    const handleChangeLanguage =(e)=>{
        i18n.changeLanguage(e.target.value)
    }

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
      });
    
           
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 150 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };


        return(
            <header className="header header-section ">
                <navbar className="nav container">
                    <a to="/" className="nav__logo">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <div className={`nav__menu `} id="nav-menu">
                        <ul className={`  ${showMenu ? "show-menu" : "nav__list"}`} id="nav__list" >
                            <button className="close_menu" onClick={toggleMenu}><FaTimes/></button>
                            <li className="nav__item">
                                <a href="#" className="nav__link">{t("nav.home")}</a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link about">{t("nav.about")}</a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">{t("nav.services")}</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">{t("nav.faq")}</a>
                            </li>
                            <button className="btn nav_list_btn">{t("nav.nav-btn")}</button>
                        </ul>
                        <div className="dark-div"></div>
                        <select className="lang_option" onChange={handleChangeLanguage}>
                            <option className="lang_option" value="uz">Узбекча</option>
                            <option className="lang_option" value="ru">Русский</option>         
                        </select>
                        <button className="open_menu" onClick={toggleMenu}><FaBars/></button>
                        <button className="btn custom-btn">{t("nav.nav-btn")}</button>
                    </div>
                </navbar>
            </header>

            
        );
    }

export default Navbar;