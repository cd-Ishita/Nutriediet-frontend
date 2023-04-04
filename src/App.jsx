import React from 'react'

import { Container, NextUIProvider } from '@nextui-org/react';

// Componenets
import Navigation from './components/Navigation';
import Hero from './components/Hero';

const App = () => {
  return (
    <NextUIProvider>
        <Navigation />
        <Hero />
    </NextUIProvider>
  );
}

export default App