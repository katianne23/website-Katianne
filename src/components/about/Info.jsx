import React from 'react';
import { Translator } from '../i18n';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">
              <Translator path="info.title_one"/>
            </h3>
            <span className="about__subtitle">
              <Translator path="info.subtitle_one"/>
            </span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">
              <Translator path="info.title_two"/>
            </h3>
            <span className="about__subtitle">
              <Translator path="info.subtitle_two"/>
            </span>
        </div>

        <div className="about__box">
            <i class='bx bx-notepad about__icon'></i>
            <h3 className="about__title">
              <Translator path="info.title_three"/>
            </h3>
            <span className="about__subtitle">
              <Translator path="info.subtitle_three"/>
            </span>
        </div>
    </div>
  )
}

export default  Info; 
