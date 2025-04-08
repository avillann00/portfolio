import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Resume from './pages/Resume';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Landing /> }/>
        <Route path='/resume' element={ <Resume /> }/>
        <Route path='/project/:id' element={ <ProjectDetails /> }/>
        <Route path='/about' element={ <About /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
