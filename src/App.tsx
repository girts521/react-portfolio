import React from 'react';
import logo from './logo.svg';
import './reset.css'

import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import About from './components/About/About';

const App: React.FC = () => {
  return <>
    <Nav />
    <Main />
    <About />
  </>
}

export default App;
