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
            'flex h-8 w-32 cursor-pointer items-center justify-center rounded-2xl  bg-red-300 text-center font-medium text-black duration-300 hover:bg-orange-500 hover:text-blue-50 focus:bg-orange-500 focus:text-blue-50'
          }
          to={'/'}
        >
          <span className={'pr-2'}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>
          </span>
          Home
        </Link>
        <Link
          className={
            'flex h-8 w-32 cursor-pointer items-center justify-center rounded-2xl bg-red-300  text-center font-medium text-black transition-all duration-300 hover:bg-orange-500 hover:text-blue-50 focus:bg-orange-500 focus:text-blue-50'
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
