import React, { useState } from 'react';
import AuthProvider from './AuthProvider.jsx';

const AppHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header
      className={'container  flex items-center justify-between gap-3 py-4'}
    >
      <div className={'flex-col items-center'}>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <img
              className={'mb-2 w-8'}
              src='/image/theme/sun-light-theme-svgrepo-com.svg'
              alt='light-theme'
            />
          ) : (
            <img
              className={'mb-2 w-8'}
              src='/image/theme/moon-stars-svgrepo-com%20(1).svg'
              alt='dark-theme'
            />
          )}
        </button>
        <h1 className={'font-playfair-display text-8xl'}>Hello World!</h1>
      </div>
      <AuthProvider />
    </header>
  );
};

export default AppHeader;
