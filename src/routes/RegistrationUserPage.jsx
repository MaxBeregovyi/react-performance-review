import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { app } from '../firebase.js';

const RegistrationUserPage = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const db = getFirestore(app);

  let [userEmail, setUserEmail] = useState('');
  let [userPass, setUserPass] = useState('');

  const regUser = () => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPass)
      .then((userData) => {
        setUserEmail('');
        setUserEmail('');

        console.log(userData);
        setDoc(doc(db, 'users', userData.user.uid), {
          email: userData.user.email,
        })
          .then(() => {
            navigate('/');
          })
          .catch((e) => {
            console.error(e.message);
          });
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <form onSubmit={regUser} className={'container'}>
      <h2 className={'mb-8 flex justify-center text-5xl text-blue-300'}>
        Registration Page
      </h2>
      <div className={' flex flex-col items-center justify-center gap-3'}>
        <input
          onInput={() => setUserEmail(event.target.value)}
          className={'reg-input'}
          placeholder={'Email'}
          type='email'
          name='email'
          autoComplete={'email'}
        />
        <input
          onInput={() => setUserPass(event.target.value)}
          className={'reg-input'}
          type='password'
          name='password'
          placeholder={'Password'}
          autoComplete={'current-password'}
        />
        <button className={'link-style'}>Register</button>
      </div>
    </form>
  );
};

export default RegistrationUserPage;
