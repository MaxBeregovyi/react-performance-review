import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { app, googleAuthProvider, githubAuthProvider } from '../firebase.js';
import AppBtnGoogleAuth from './forms/AppBtnGoogleAuth.jsx';
import AppBtnGitHubAuth from './forms/AppBtnGitHubAuth.jsx';

const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const startGoogleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((cred) => {
        setUser(cred.user);
      })
      .catch((error) => alert(error.message));
  };

  const startGitHubLogin = () => {
    signInWithPopup(auth, githubAuthProvider)
      .then((cred) => {
        setUser(cred.user);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => alert(error.message));
  };

  return user !== null ? (
    <>
      <div
        className={
          'info-shadow ml-4 w-full max-w-80  rounded-2xl border-blueViolet px-2  py-2'
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
    </>
  ) : (
    <>
      <div className={'ml-10 inline-flex flex-col'}>
        <AppBtnGitHubAuth startGitHubLogin={startGitHubLogin} />
        <AppBtnGoogleAuth startGoogleLogin={startGoogleLogin} />
      </div>
    </>
  );
};

export default AuthProvider;
