import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const RegistrationUserPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const userReg = () => {
    createUserWithEmailAndPassword(auth, userEmail, userPass)
      .then((userData) => {
        console.log(userData);
        setUserEmail('');
        setUserPass('');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className={'container'}>
        <h2
          className={
            'mb-4 flex justify-center font-playfair-display text-5xl text-blue-300'
          }
        >
          Registration Page
        </h2>
        <div className={'inline-flex flex-col items-center gap-3'}>
          <input
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            className={
              'block rounded-2xl border-2 border-[#24292F] bg-transparent pl-3 text-white'
            }
            placeholder={'Email'}
            type='text'
            name='email'
            autoComplete={'username'}
          />
          <input
            value={userPass}
            onInput={(event) => setUserPass(event.target.value)}
            className={
              'block rounded-2xl border-2 border-[#24292F] bg-transparent pl-3 text-white'
            }
            type='password'
            name='password'
            placeholder={'Password'}
            autoComplete={'current-password'}
          />
          <button onClick={userReg} className={'link-style'}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RegistrationUserPage;
