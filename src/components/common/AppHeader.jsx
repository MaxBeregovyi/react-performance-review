import React from 'react';
import AuthProvider from '../AuthProvider.jsx';

const AppHeader = () => {
  return (
    <header className={'my-4 flex items-center justify-between'}>
      <h1 className={'font-playfair-display text-8xl'}>Hello World!</h1>
      <AuthProvider />
    </header>
  );
};

export default AppHeader;
