import React from 'react'

import { Container, NextUIProvider, Spacer } from '@nextui-org/react';

import { Route, Routes } from 'react-router-dom';

// Componenets
import Home from './Home';
import Progress from './Progress'
import Review from './Review'
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
      <NextUIProvider>
          <Navigation/>
      </NextUIProvider>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/progress' element={<Progress />} />
        <Route path='/review' element={<Review />} />
      </Routes>
    </>
  );
}

export default App