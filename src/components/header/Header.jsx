import React, { useState } from 'react';
import "./header.css";
import I18n from '../i18n/I18n';
import { Translator } from '../i18n';
// import "./index";

const dayNight = document.querySelector(".day-night");
         dayNight.addEventListener("click", () => {
         dayNight.querySelector("i").classList.toggle("bxs-sun");
         dayNight.querySelector("i").classList.toggle("bxs-moon");
         document.body.classList.toggle("dark");
     })
     
     window.addEventListener("load", () => {
         if(document.body.classList.contains("dark")){
             dayNight.querySelector("i").classList.add("bxs-sun");
         } else {
             dayNight.querySelector("i").classList.add("bxs-moon");
         }
     })
const Header = () => {  
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add
            ("scroll-header");
        else header.classList.remove("scroll-header");
    })
    
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className='nav__logo'>Katianne</a>

                <div className={Toggle ? "nav__menu show-menu" :
                    "nav__menu"}>
                       
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a
                                href="#home"
                                onClick={() => setActiveNav("#home")}
                                className={
                                    activeNav === "#home" ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-estate nav__icon"></i>
                                <Translator path="navbar.detail_one" />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#about"
                                onClick={() => setActiveNav("#about")}
                                className={
                                    activeNav === "#about" ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-user nav__icon"></i>
                                    <Translator path="navbar.detail_two" />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#skills"
                                onClick={() => setActiveNav("#skills")}
                                className={
                                    activeNav === "#skills" ? "nav__link active-link"
                                        : "nav__link"
                                }>
                                <i className="uil uil-file-alt nav__icon"></i>
                                <Translator path="navbar.detail_three" />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services"
                                onClick={() => setActiveNav("#services")}
                                className={
                                    activeNav === "#services" ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-scenery nav__icon"></i>
                                    <Translator path="navbar.detail_four" />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#certificate"
                                onClick={() => setActiveNav("#certificate")}
                                className={
                                    activeNav === "#certificate" ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-brain nav__icon"></i>
                                <Translator path="navbar.detail_five" />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact"
                                onClick={() => setActiveNav("#contact")}
                                className={
                                    activeNav === "#contact" ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-message nav__icon"></i>
                                <Translator path="navbar.detail_six" />
                            </a>
                        </li>

                        <li className="nav__item">
                            <I18n className="nav__link" />
                        </li>

                        <li className="nav__item">
                            <div class="day-night">
                                <i class='bx bxs-sun icon__theme'></i>
                            </div>
                        </li>

                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu
                        (!Toggle)}>
                    </i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu
                    (!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;