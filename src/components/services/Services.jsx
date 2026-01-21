import React, { useState } from 'react';
import "./services.css";
import { Translator } from '../i18n';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">
                <Translator path="services.title" />
            </h2>
            <span className="section__subtitle">
                <Translator path="services.subtitle" />
            </span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            <Translator path="services.services_title_one" />
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        <Translator path="services.button" />
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil 
                        uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">
                                <Translator path="services.services_title_one" />
                            </h3>
                            <p className="services__modal-description">
                                <Translator path="services.modal_one" />
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_one" />
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_two" />
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_three" />
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_four" />
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_five" />
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            <Translator path="services.services_title_two" />
                        </h3>
                    </div>
                    <span onClick={() => toggleTab(2)}
                        className="services__button">
                        <Translator path="services.button" />
                        <i className="uil  services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil 
                        uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">
                                <Translator path="services.services_title_two" />
                            </h3>
                            <p className="services__modal-description">
                                <Translator path="services.modal_two" />
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_two_one" />
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_two_two" />
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_two_three" />
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_two_four" />
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_two_five" />
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">
                            <Translator path="services.services_title_three" />
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(3)}
                        className="services__button">
                        <Translator path="services.button" />
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil 
                        uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">
                                <Translator path="services.services_title_three" />
                            </h3>
                            <p className="services__modal-description">
                                <Translator path="services.modal_three" />
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_three_one" />
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_three_two" />
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_three_three" />
                                    </p>
                                </li>

                                  <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_three_four" />
                                    </p>
                                </li>

                                  <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <Translator path="services.p_three_five" />
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services;