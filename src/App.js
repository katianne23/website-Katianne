import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Certificate from './components/certificate/Certificate';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Certificate />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App;
