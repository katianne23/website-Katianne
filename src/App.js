import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills';



function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skills />
    </main>
    </>
  )
}

export default App;
