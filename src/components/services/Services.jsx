import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
     <section className="services section" id="services">
        <h2 className="section__title">Serviços</h2>
        <span className="section__subtitle">O que eu ofereço</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Designer <br /> Produtos</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    Veja Mais
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil 
                        uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Designer Produtos</h3>
                        <p className="services__modal-description">
                            Tenho 2 anos de experiência adquirida durantes cursos,
                            e projetos práticos na area de desenvolvimento web. 
                            Ofereço serviços de excelente
                            qualidade, garantindo a satisfação dos clientes. 
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de Interface do Usuário</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de Paginas Webs</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de Design</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Designer <br/> Ui/Ux</h3>
                </div>
                <span onClick={() => toggleTab(2)}
                className="services__button">
                    Veja Mais 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil 
                        uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Designer Ui/Ux</h3>
                        <p className="services__modal-description">
                            Tenho 2 anos de experiência adquirida durantes cursos,
                            e projetos práticos na area de desenvolvimento web. 
                            Ofereço serviços de excelente
                            qualidade, garantindo a satisfação dos clientes. 
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de Interface do Usuário</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de Paginas Webs</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de Design</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Designer <br/> Visual</h3>
                </div>

                <span onClick={() => toggleTab(3)}
                className="services__button">
                    Veja Mais 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil 
                        uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Designer Visual</h3>
                        <p className="services__modal-description">
                            Tenho 2 anos de experiência adquirida durantes cursos,
                            e projetos práticos.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de Interface do Usuário</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de Paginas Webs</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Desenvolvimento de Design</p>
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