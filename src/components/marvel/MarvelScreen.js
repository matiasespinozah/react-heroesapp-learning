import HeroeList from '../heroes/HeroeList';

const MarvelScreen = () => {

  const publisher = 'Marvel Comics';

  return (
    <>
      <h1> Marvel Screen </h1>
      <hr />

      <HeroeList publisher={publisher} />
    </>
  );
};

export default MarvelScreen;
