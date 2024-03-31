import React from 'react';
import AuthProvider from '../AuthProvider.jsx';

const AppHeader = () => {
  return (
    <header className={'container flex items-center justify-between p-4'}>
      <h1 className={'font-playfair-display text-8xl'}>Hello World!</h1>
      <AuthProvider />
    </header>
  );
};

export default AppHeader;
