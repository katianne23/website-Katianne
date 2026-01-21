import React, { useState } from 'react';
import "./qualification.css";
import { Translator } from '../i18n';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">
                <Translator path="qualification.title" />
            </h2>
            <span className="section__subtitle">
                <Translator path="qualification.subtitle" />
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        <Translator path="qualification.qualification_title_one" />
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        <Translator path="qualification.qualification_title_two" />
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">
                                    <Translator path="qualification.qualification_subtitle_one" />
                                </h3>
                                <span className="qualification__subtitle">
                                    <Translator path="qualification.qualification_subtitle_two" />
                                </span>
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
                                <h3 className="qualification__title">
                                    <Translator path="qualification.qualification_subtitle_three" />
                                </h3>
                                <span className="qualification__subtitle">
                                    Uniasselvi
                                </span>
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
                                <h3 className="qualification__title">
                                    <Translator path="qualification.qualification_subtitle_four" />
                                </h3>
                                <span className="qualification__subtitle">
                                    RC Informática
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    <Translator path="qualification.data_one" /> 2017 -
                                    <Translator path="qualification.data_three" /> 2017
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
                                <h3 className="qualification__title">
                                    <Translator path="qualification.qualification_subtitle_five" />
                                </h3>
                                <span className="qualification__subtitle">
                                    Hiring Coders
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    <Translator path="qualification.data_two" /> 2022 -
                                    <Translator path="qualification.data_one" /> 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    <Translator path="qualification.qualification_subtitle_six" />
                                </h3>
                                <span className="qualification__subtitle">
                                    Freelancer
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    <Translator path="qualification.data_four" /> 2023 -
                                    <Translator path="qualification.data_three" />
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
                                <h3 className="qualification__title">
                                    <Translator path="qualification.qualification_subtitle_seven" />
                                </h3>
                                <span className="qualification__subtitle">
                                    Ovonne
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    <Translator path="qualification.data_seven" /> 2025 -
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