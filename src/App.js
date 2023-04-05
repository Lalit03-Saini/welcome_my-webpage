import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/body';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
