import React from 'react';
import AuthProvider from '../AuthProvider.jsx';

const AppHeader = () => {
  return (
    <header>
      <h1 className={'mb-4 text-center font-playfair-display text-8xl'}>
        Hello World!
      </h1>
      <AuthProvider />
    </header>
  );
};

export default AppHeader;
