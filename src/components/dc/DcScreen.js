import HeroeList from "../heroes/HeroeList";


const DcScreen = () => {
  const publisher = 'DC Comics';

  return (
    <>
      <h1> Dc Screen </h1>
      <hr />

      <HeroeList publisher={publisher} />
    </>
  );
};

export default DcScreen;
