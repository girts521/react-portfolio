import React from 'react';
import './reset.css'

import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

const App: React.FC = () => {
  return <>
    <Nav />
    <Main />
    <About />
    <Skills />
  </>
}

export default App;
