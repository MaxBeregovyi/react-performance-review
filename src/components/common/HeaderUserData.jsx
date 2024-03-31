import React from 'react';

const HeaderUserData = ({ handleLogout, user }) => {
  return (
    <div
      className={
        'info-shadow mr-4 w-full max-w-80  rounded-2xl border-blueViolet px-2  py-2'
      }
    >
      <div className={'flex justify-between'}>
        <img
          className={'w-20 rounded-2xl'}
          src={user.photoURL}
          alt={user.displayName}
        />
        <button onClick={handleLogout} className='link-style max-w-20'>
          Log out
        </button>
      </div>
      <h2 className={'font-bold '}>
        User name:{' '}
        <span className={'font-medium text-tiffanyBlue'}>
          {user.displayName}
        </span>
      </h2>
      <h2 className={'font-bold'}>
        Email:{' '}
        <span className={'font-medium text-tiffanyBlue'}>{user.email}</span>
      </h2>{' '}
      {user.phoneNumber !== null ? (
        <h2 className={'font-medium'}>
          Phone:{' '}
          <span className={'font-medium text-tiffanyBlue'}>
            {user.phoneNumber}
          </span>
        </h2>
      ) : (
        <h2 className={'font-bold'}>
          Phone:{' '}
          <span className={'font-medium text-tiffanyBlue'}>
            Phone number not registered
          </span>
        </h2>
      )}
    </div>
  );
};

export default HeaderUserData;
