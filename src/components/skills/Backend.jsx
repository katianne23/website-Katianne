import React from 'react';
import { Translator } from '../i18n';

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">
            <Translator path="skills.back_title"/>
        </h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">
                            <Translator path="skills.basic"/>
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skills__name">NodeJs</h3>
                        <span className="skills__level">
                            <Translator path="skills.basic"/>
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">
                            <Translator path="skills.inter"/>
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">
                            <Translator path="skills.inter"/>
                        </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">
                            <Translator path="skills.inter"/>    
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Backend