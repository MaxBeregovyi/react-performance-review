const HomePage = () => {
  let myArray = ['hi', 'hello', 'react'];

  return (
    <div>
      <h1 className={'flex justify-center text-5xl text-blue-300'}>
        Welcome to the Home page!
      </h1>
      <ul className={'flex justify-center gap-32'}>
        {myArray.map((item) => (
          <li>
            <button className={'link-style'}>{item}</button>
          </li>
        ))}
      </ul>
      {/*TODO: info page*/}
    </div>
  );
};
export default HomePage;
