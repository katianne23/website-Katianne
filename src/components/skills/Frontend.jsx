import React from 'react';
import { Translator } from '../i18n';

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">
                <Translator path="skills.front_title" />
            </h3>
            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">
                                <Translator path="skills.advan" />
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">
                                <Translator path="skills.advan" />
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">
                                <Translator path="skills.advan" />
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                            <span className="skills__level">
                                <Translator path="skills.inter" />
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">
                                <Translator path="skills.inter" />
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">
                                <Translator path="skills.inter" />
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">TypeScript</h3>
                            <span className="skills__level">
                                <Translator path="skills.inter" />
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Next JS</h3>
                            <span className="skills__level">
                                <Translator path="skills.inter" />
                            </span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Vue JS</h3>
                            <span className="skills__level">
                                <Translator path="skills.basic" />
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Frontend