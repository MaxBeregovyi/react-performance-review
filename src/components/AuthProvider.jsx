import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { app, googleAuthProvider, githubAuthProvider } from '../firebase.js';
import AppBtnGoogleAuth from './forms/AppBtnGoogleAuth.jsx';
import AppBtnGitHubAuth from './forms/AppBtnGitHubAuth.jsx';
import RegistrationUserPage from '../routes/RegistrationUserPage.jsx';
import { Link } from 'react-router-dom';
import HeaderUserData from './common/HeaderUserData.jsx';

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
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => alert(error.message));
  };

  const startGitHubLogin = () => {
    signInWithPopup(auth, githubAuthProvider)
      .then((result) => {
        setUser(result.user);
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
    <HeaderUserData user={user} handleLogout={handleLogout} />
  ) : (
    <>
      <div className={'ml-10 inline-flex flex-col'}>
        <AppBtnGitHubAuth startGitHubLogin={startGitHubLogin} />
        <AppBtnGoogleAuth startGoogleLogin={startGoogleLogin} />
        <Link
          className='mb-2 me-2 inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55'
          to={'/reg'}
        >
          Registration
        </Link>
      </div>
    </>
  );
};

export default AuthProvider;
