import Logo from "../images/Logo.png";
import React, { useState }  from 'react';
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
        return(
            <header className="header container">
                <navbar className="nav">
                    <a to="/" className="nav__logo">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <div className={`nav__menu `} id="nav-menu">
                        <ul className={`  ${showMenu ? "show-menu" : "nav__list"}`} id="nav__list" >
                            <button className="close_menu" onClick={toggleMenu}><FaTimes/></button>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Асосий</a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">Биз ҳақимизда</a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">Хизматлар</a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">ФАҚ</a>
                            </li>
                            <button className="btn nav_list_btn">Богланиш</button>
                        </ul>
                        <div>
                            <div className="dark-div"></div>
                            <select className="lang_option" onChange={handleChangeLanguage}>
                                <option className="lang_option" value="ru">Русский</option>
                                <option className="lang_option" value="uz">Узбекча</option>
                                
                            </select>
                            <button className="open_menu" onClick={toggleMenu}><FaBars/></button>
                            <button className="btn custom-btn">Богланиш</button>
                        </div>
                        
                        
                        {/* <div className="nav__close" id="nav-close">
                            <FaTimes/>
                        </div> */}
                    </div>
                    {/* <div className="nav__toggle" id="nav-toggle" >
                        <FaBars />
                    </div> */}

                </navbar>
            </header>

            
        );
    }

export default Navbar;