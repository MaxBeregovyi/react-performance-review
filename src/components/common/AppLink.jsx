import React from 'react';
import { Link } from 'react-router-dom';

const AppLink = () => {
  return (
    <>
      <h2
        className={'mb-8 text-center font-playfair-display text-3xl font-bold'}
      >
        AppLink
      </h2>
      <div className={'mb-2 flex justify-center gap-2 '}>
        <Link
          className={
            'flex h-8 w-32 cursor-pointer items-center justify-center rounded-2xl  bg-red-300 text-center font-medium text-black hover:bg-orange-500 hover:text-blue-50 focus:bg-orange-500 focus:text-blue-50'
          }
          to={'/'}
        >
          Home
        </Link>
        <Link
          className={
            'flex h-8 w-32 cursor-pointer items-center justify-center rounded-2xl bg-red-300  text-center font-medium text-black hover:bg-orange-500 hover:text-blue-50 focus:bg-orange-500 focus:text-blue-50'
          }
          to={'/devs'}
        >
          Developer
        </Link>
      </div>
    </>
  );
};

export default AppLink;
