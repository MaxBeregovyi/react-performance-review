import { Link } from 'react-router-dom';
import { getFirestore, getDocs, collection, query } from 'firebase/firestore';
import { app } from '../firebase.js';
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedLanguage } from '../state/tableFilters/tableFilters.actions.js';

const DevelopersPage = () => {
  const db = getFirestore(app);
  let [devs, setDevs] = useState([]);
  let [loading, setLoading] = useState(true);
  let [languages, setLanguages] = useState(['All']);
  let selectedLang = useSelector(
    (state) => state.tableFilterReducer.selectedLanguage,
  );
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

  const getLanguages = () => {
    if (languages.length <= 1) {
      getDocs(query(collection(db, 'language')))
        .then((q) => {
          let temp = [];
          q.forEach((item) => {
            temp.push(item.data());
          });
          return temp;
        })
        .then((res) =>
          setLanguages(() => (languages = [{ id: 999, name: 'All' }, ...res])),
        )

        .catch((e) => alert(e))
        .finally(() => {
          setLoading(() => (loading = false));
        });
    }
  };

  useEffect(() => {
    getDevs();
    getLanguages();
  }, []);

  return (
    <>
      <h1 className={'mb-3 flex justify-center text-5xl text-blue-300'}>
        Hi Developers
      </h1>
      <ul className={'mb-3 flex justify-center gap-3'}>
        {languages.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => {
                dispatch(updateSelectedLanguage(item.name));
              }}
              className={`${
                selectedLang.toLowerCase() === item?.name?.toLowerCase()
                  ? 'h-8 w-28 items-center rounded-3xl border-2 border-amber bg-amber font-medium'
                  : 'link-style'
              } uppercase`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <div className={'container mx-auto table'}>
        <div className={'table__row grid grid-cols-4'}>
          <div className='table__cell'>User name</div>
          <div className='table__cell'>User email</div>
          <div className='table__cell'>User id</div>
          <div className='table__cell'>User page</div>
        </div>
        {!loading
          ? devs.map((user) => (
              <div className={'table__row mx-auto grid grid-cols-4 '}>
                <div className='table__cell'>{user?.name || 'N/A'}</div>
                <div className='table__cell'>{user.email}</div>
                <div className='table__cell'>{user.id}</div>
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
