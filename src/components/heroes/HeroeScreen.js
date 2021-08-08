import React, { useMemo } from "react";
import { Redirect, useParams, useHistory } from "react-router";
import { getHeroById } from "../../selectors/getHeroById";

const heroesImages = require.context('../../assets/heroes', true);

const HeroeScreen = () => {
  const history = useHistory();

  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  if (!!!hero) {
    return <Redirect to="/"/>
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

  const handlerReturn = () => (history.length <= 2) ? history.push('/') : history.goBack();
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={heroesImages(`./${heroeId}.jpg`).default} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>

      <div className="col-8">
        <h3> {superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
          <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
          <li className="list-group-item"> <b> Firts appearance: </b> { first_appearance } </li>
        </ul>

        <h5> Characters </h5>
        <p> { characters } </p>

        <button
          className="btn btn-outline-danger"
          onClick={handlerReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroeScreen;
