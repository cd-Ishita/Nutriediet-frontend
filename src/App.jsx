import React from 'react'

import { Container, NextUIProvider, Spacer } from '@nextui-org/react';

// Componenets
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Progress from './components/Progress';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutM from './components/AboutM';
import Process from './components/Process'
import Services from './components/Services';

const App = () => {
  return (
    <NextUIProvider>
          <Navigation />
          <Hero />
          <Process/>
          <Services/>
          <Spacer y={2.5} />
          <AboutM/>
          <Progress/>
          <Spacer y={2.5} />
          <Contact/>
          <Spacer y={2.5} />
          <Footer/>
    </NextUIProvider>
  );
}

export default App