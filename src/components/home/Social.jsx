import React from 'react';

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/katianne.araujo/" className="home__social-icon" target={'_blank'}>
                <i className='uil uil-instagram'></i>
            </a>

            <a href="https://www.linkedin.com/in/katiannearaujo/" className="home__social-icon" target={'_blank'}>
                <i className='uil uil-linkedin'></i>
            </a>

            <a href="https://github.com/katianne23" className="home__social-icon" target={'_blank'}>
                <i className='uil uil-github-alt'></i>
            </a>
            
        </div>
    )
}

export default Social;