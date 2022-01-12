import '../styles/main.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import callToApi from '../services/callToApi';

import Footer from './Footer';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<> Página principal</>} />
        <Route path='/instructions' element={<> Instrucciones</>} />
        <Route path='/options' element={<>Juego</>} />
        <Route path='*' element={<>Página no encontrada</>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
