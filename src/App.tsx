import React from 'react';
import './reset.css'
import styles from './app.module.css';

import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

const App: React.FC = () => {
  return <div className={styles.container}>
    <Nav />
    <Main />
    <About />
    <Skills />
    <Projects />
  </div>
}

export default App;
