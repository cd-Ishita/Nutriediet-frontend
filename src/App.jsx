import React from 'react'

import { Container, NextUIProvider, Spacer } from '@nextui-org/react';

// Componenets
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <NextUIProvider>
          <Navigation />
          <Hero />
          <Review/>
          <Contact/>
          <Spacer y={2.5} />
          <Footer/>
    </NextUIProvider>
  );
}

export default App