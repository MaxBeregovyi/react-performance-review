import React from 'react';
import { Link } from 'react-router-dom';
import SingleDeveloperPage from '../../routes/SingleDeveloperPage.jsx';
import UsersPage from '../../routes/UsersPage.jsx';

const AppLink = () => {
  let routersPath = [
    { title: 'Developer Page', link: '/devs' },
    { title: 'Login Page', link: '/login' },
    { title: 'Single Dev Page', link: '/devs/:id' },
    { title: 'UsersPage', link: '/users' },
  ];
  return (
    <>
      <h2
        className={'mb-8 text-center font-playfair-display text-3xl font-bold'}
      >
        AppLink
      </h2>

      <div className={'mb-2 flex justify-center gap-2 '}>
        <Link className={'link-style'} to={'/'}>
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
        {routersPath.map((route, index) => (
          <Link key={index} className={'link-style'} to={route.link}>
            {route.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default AppLink;
//   return (
//     <>
//       <h2
//         className={'mb-8 text-center font-playfair-display text-3xl font-bold'}
//       >
//         AppLink
//       </h2>
//       <div className={'mb-2 flex justify-center gap-2 '}>
//         <Link className={'link-style'} to={'/'}>
//           <span className={'pr-2'}>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={1.5}
//               stroke='currentColor'
//               className='h-5 w-5'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
//               />
//             </svg>
//           </span>
//           Home
//         </Link>
//         <Link className={'link-style'} to={'/devs'}>
//           Developer
//         </Link>
//       </div>
//     </>
//   );
// };


