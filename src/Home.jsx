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
import Review from './components/Review';

const Home = () => {
  return (
    <NextUIProvider>  
          <Hero />
          <Process/>
          <Services/>
          <Spacer y={2.5} />
          <AboutM/>
          <Spacer y={2.5} />
          <Contact/>
          <Footer/>
    </NextUIProvider>
  );
}

export default Home