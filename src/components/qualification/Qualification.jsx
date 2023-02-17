import React,{useState} from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualificações</h2>
        <span className="section__subtitle">Minha Jornada Pessoal</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ?
                "qualification__button qualification__active button--flex" :
                "qualification__button button--flex"}
                onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Educação
                </div>

                <div className={toggleState === 2 ?
                "qualification__button qualification__active button--flex" :
                "qualification__button button--flex"}
                onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experiências
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ?
                "qualification__content qualification__content-active" :
                "qualification__content"}>
                    <div className="qualification__data">
                        
                        <div>
                            <h3 className="qualification__title">Tecnico em Informática</h3>
                            <span className="qualification__subtitle">Escola 
                            Profissionalizante </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2015 - 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Analise e Desenvolvimento de Sistemas</h3>
                            <span className="qualification__subtitle">Uniasselvi</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - 2022
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ?
                "qualification__content qualification__content-active" :
                "qualification__content"}>
                    <div className="qualification__data">
                        
                        <div>
                            <h3 className="qualification__title">Estagiario de TI</h3>
                            <span className="qualification__subtitle">RC Informática</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Ago 2017 - Dez 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Aluno</h3>
                            <span className="qualification__subtitle">Hiring Coders</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Maio 2022 - Ago 2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification;