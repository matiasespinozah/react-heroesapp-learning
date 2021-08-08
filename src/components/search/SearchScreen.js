import React, { useMemo } from 'react'
import queryString from 'query-string';
import HeroCard from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useHistory, useLocation } from 'react-router';
import getHeroByName from '../../selectors/getHeroByName';

const SearchScreen = () => {
  const history = useHistory();
  const location  =useLocation();
  const { q:query = '' } = queryString.parse(location.search);

  const [{ search }, handleInputChange] = useForm({
    search: query
  });

  const heroesFiltered = useMemo(() => getHeroByName(query), [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  }

  return (
    <div>
      <h1> Search Screen </h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Search Form </h4>
          <hr />

          <form onSubmit={handleSearch} autoComplete="off">
            <input 
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="search"
              onChange={handleInputChange}
              value={search}/>

            <button
              type="submit"
              className="btn btn-block btn-outline-primary m-1">
                Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Results </h4>
          <hr />

          {
            (query === '') && <div className="alert alert-info">  Search a hero  </div>
          }

          {
            (query !== '' && heroesFiltered.length === 0) && <div className="alert alert-danger">  There is no a hero with { query }  </div>
          }

          {
            heroesFiltered.map(hero => (
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchScreen
