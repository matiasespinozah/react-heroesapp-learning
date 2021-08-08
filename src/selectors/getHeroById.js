import { heroes } from '../data/heroes';


export const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id);
}