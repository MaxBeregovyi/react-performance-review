import { Link } from 'react-router-dom';
import { getFirestore, getDocs, collection, query } from 'firebase/firestore';
import { app } from '../firebase.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getLanguages } from '../state/tableFilters/tableFilters.thunk.js';
import AppDevsFilterForm from '../components/forms/AppDevsFilterForm.jsx';

const DevelopersPage = () => {
  const db = getFirestore(app);
  let [devs, setDevs] = useState([]);
  let [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getDevs = () => {
    getDocs(query(collection(db, 'users')))
      .then((q) => {
        let temp = [];
        q.forEach((item) => {
          temp.push(item.data());
        });
        return temp;
      })
      .then((res) => setDevs(() => (devs = res)))

      .catch((e) => alert(e))
      .finally(() => {
        setLoading(() => (loading = false));
      });
  };

  useEffect(() => {
    getDevs();
    dispatch(getLanguages());
  }, []);

  return (
    <>
      <h1 className={'mb-3 flex justify-center text-5xl text-blue-300'}>
        Hi Developers
      </h1>
      <AppDevsFilterForm />
      <div className={'container mx-auto table'}>
        <div className={'table__row grid grid-cols-4'}>
          <div className='table__cell'>User name</div>
          <div className='table__cell'>User email</div>
          <div className='table__cell'>User Language</div>
          <div className='table__cell'>User page</div>
        </div>
        {!loading
          ? devs.map((user) => (
              <div
                key={user.id}
                className={'table__row mx-auto grid grid-cols-4 '}
              >
                <div className='table__cell'>{user?.name || 'N/A'}</div>
                <div className='table__cell'>{user.email}</div>
                <div className='table__cell'>{user.language}</div>
                <div className='table__cell'>
                  <Link to={`/devs/${user.id}`}>Go to user >></Link>
                </div>
              </div>
            ))
          : 'loading...'}
      </div>
    </>
  );
};

export default DevelopersPage;
