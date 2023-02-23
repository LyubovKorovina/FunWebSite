import React from 'react';
import './App.css';
import {
  Navbar,
  Header,
  About,
  Myhobbies,
  Cyberpath,
  
} from './components/index.js';

function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar/>
        <Header/>
      </header>
      <About/>
      <Myhobbies/>
      <Cyberpath/>
    </main>
  );
}

export default App;
