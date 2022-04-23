import './App.css';
import React from 'react';
import logo from './logo-umbra.png'
import Imageoverview from './componentes/imagesOverview.js';
const App = () => {
  return (
    <div>
      <header className='Header'>
        <img className='logo' src={logo}/>
      </header>
      <Imageoverview />
    </div>
  );
}

export default App;
