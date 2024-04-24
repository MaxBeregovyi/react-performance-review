import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { app } from '../firebase.js';

const RegistrationUserPage = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [data, setData] = useState({ email: '', password: '' });

  const regUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userData) => {
        setDoc(doc(db, 'users', userData.user.uid), {
          email: userData.user.email,
          id: userData.user.uid,
        })
          .then(() => {
            setData({ email: '', password: '' });
            navigate('/devs/' + userData.user.uid);
          })
          .catch((e) => {
            alert(e.message);
          });
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  function handleEventChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <form onSubmit={regUser} className={'container'}>
      <h2 className={'mb-8 flex justify-center text-5xl text-blue-300'}>
        Registration Page
      </h2>
      <div className={' flex flex-col items-center gap-3'}>
        <input
          value={data.email}
          onChange={(e) => handleEventChange(e, 'email')}
          className={'reg-input'}
          placeholder={'Email'}
          type='email'
          name='email'
          autoComplete={'email'}
        />

        <input
          value={data.password}
          onChange={(e) => handleEventChange(e, 'password')}
          className={'reg-input'}
          type='password'
          name='password'
          placeholder={'Password'}
          autoComplete={'current-password'}
        />

        <button className={'link-style'} type='submit'>
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationUserPage;
