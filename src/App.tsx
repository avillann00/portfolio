import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Resume from './pages/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Landing /> }/>
        <Route path='/resume' element={ <Resume /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
