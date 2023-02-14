import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Experiência</h3>
            <span className="about__subtitle">2 anos estudando</span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Concluído</h3>
            <span className="about__subtitle">50 + Projetos</span>
        </div>

        <div className="about__box">
            <i class='bx bx-notepad about__icon'></i>
            <h3 className="about__title">Aprendizado</h3>
            <span className="about__subtitle">4 + Tecnologias</span>
        </div>
    </div>
  )
}

export default  Info; 
