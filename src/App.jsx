import React from 'react'

import { Container, NextUIProvider, Spacer } from '@nextui-org/react';

// Componenets
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';

const App = () => {
  return (
    <NextUIProvider>
          <Navigation />
          <Hero />
          <About/>
          <Review/>
          <Spacer y={2.5} />
          <Services/>
          <Spacer y={2.5} />
          <Contact/>
          <Spacer y={2.5} />
          <Footer/>
    </NextUIProvider>
  );
}

export default App