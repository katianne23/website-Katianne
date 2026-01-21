import React from 'react';
import "./footer.css";
import { Translator } from '../i18n';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Katianne Araújo</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link" rel="noopener noreferrer">
                        <Translator path="navbar.detail_two" />
                    </a>
                </li>

                <li>
                    <a href="#services" className="footer__link" rel="noopener noreferrer">
                        <Translator path="navbar.detail_four" />
                    </a>
                </li>

                 <li>
                    <a href="#qualification" className="footer__link" rel="noopener noreferrer">
                        <Translator path="navbar.detail_seven" />
                    </a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href="https://www.instagram.com/katianne.araujo/" 
                    className="footer__social-link" 
                    target={'_blank'}
                    rel="noopener noreferrer"
                >
                    <i className='bx bxl-instagram'></i>
                </a>

                <a 
                    href="https://www.linkedin.com/in/katiannearaujo/"
                    className="footer__social-link" 
                    target={'_blank'}
                    rel="noopener noreferrer"
                >
                    <i className='bx bxl-linkedin'></i>
                </a>

                <a 
                    href="https://github.com/katianne23" 
                    className="footer__social-link" 
                    target={'_blank'}
                    rel="noopener noreferrer"
                >
                    <i className='bx bxl-github'></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Katianne Araújo. <Translator path="footer.text" />
            </span>
        </div>
    </footer>
  )
}

export default Footer;