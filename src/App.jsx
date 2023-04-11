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
import AboutM from './components/AboutM';
import ServicesM from './components/ServicesM';

const App = () => {
  return (
    <NextUIProvider>
          <Navigation />
          <Hero />
          <AboutM/>
          <Spacer y={2.5} />
          <ServicesM/>
          <Spacer y={2.5} />
          <About/>
          <Services/>
          <Spacer y={2.5} />
          <Contact/>
          <Spacer y={2.5} />
          <Footer/>
    </NextUIProvider>
  );
}

export default App