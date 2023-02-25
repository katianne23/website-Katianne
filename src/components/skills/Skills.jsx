import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import { Translator } from '../i18n';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">
          <Translator path="skills.title"/>
        </h2>
        <span className="section__subtitle">
          <Translator path="skills.subtitle"/>
        </span>
    
        <div  className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
        
    </section>
  )
}

export default Skills