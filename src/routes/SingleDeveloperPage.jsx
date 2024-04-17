import { useNavigate, useParams } from 'react-router-dom';
import {
  getFirestore,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { app } from '../firebase.js';
import { useEffect, useState } from 'react';

const SingleDeveloperPage = () => {
  const navigate = useNavigate();
  const db = getFirestore(app);
  const params = useParams();
  let [devInfo, setDevInfo] = useState({});
  const [editButtonText, setEditButtonText] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);

  const getDev = () => {
    getDoc(doc(db, 'users', params.id))
      .then((docSnap) => {
        setDevInfo(docSnap.data());
        console.log(docSnap.data());
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const updateDev = () => {
    setDoc(doc(db, 'users', params.id), {
      email: 'Lolda!!!!te@gmail.com',
    })
      .then(() => {
        setEditButtonText(true);
        setIsTimeout(true);
        setTimeout(() => {
          setEditButtonText(false);
          setIsTimeout(false);
        }, 2000);
      })
      .catch((e) => alert(e.message));
  };
  const removeDoc = () => {
    deleteDoc(doc(db, 'users', params.id))
      .then(() => {
        navigate('/');
      })
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    getDev();
  }, []);

  return (
    <>
      <div>
        <h1 className={'mb-4 flex justify-center text-5xl text-blue-300'}>
          Single Developer Page
        </h1>
        <span className={'font-medium'}>id:</span> {params.id} <br />
        <span className={'font-medium'}>Email:</span> {devInfo?.email}
      </div>
      <button
        className={`mx-auto flex min-h-10 min-w-32 items-center justify-center rounded-3xl ${isTimeout ? 'animate-spin bg-green-700' : 'bg-orange-500'} mb-2 font-medium text-black duration-300 `}
        onClick={updateDev}
      >
        {editButtonText ? 'User update' : 'Button Edit'}
      </button>
      <button
        className={`mx-auto flex min-h-10 min-w-32 items-center justify-center rounded-3xl bg-red-500 font-medium text-black  duration-300 hover:bg-black hover:text-white `}
        onClick={removeDoc}
      >
        Delete User
      </button>
    </>
  );
};

export default SingleDeveloperPage;
