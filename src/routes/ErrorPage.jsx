import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  function goBack() {
    // window.history.back();
    navigate('/');
  }

  return (
    <div className='flex h-screen justify-center bg-gradient-to-r from-fuchsia-600 to-orange-600 hover:to-blue-700 '>
      <div className={'absolute'}>
        <img
          className={'relative top-32 pl-20'}
          src='/image/skater.png'
          alt='skater'
        />
        <img
          className='relative z-20 px-44 md:block'
          src='/image/undraw-page-not-found-su7k-1-3.png'
          alt=''
        />
        <h1 className='px-4 pb-12 pt-8 text-center text-7xl font-bold leading-10 text-gray-800'>
          Стояночка!{' '}
        </h1>
        <p className=' px-4 pb-10 text-center text-2xl leading-none text-emerald-50'>
          Вибачте, запитана сторінка не знайдена. Будь ласка, перевірте
          <br />
          правильність введеного URL або зв'яжіться з адміністратором <br />
          сайту для отримання допомоги
        </p>
        <div className='text-center'>
          <button
            onClick={goBack}
            className='bg-amber mb-10 h-10 w-44 text-wrap rounded-md border text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-opacity-50'
          >
            На головну
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
