import { heroes } from "../data/heroes";

const getHeroByName = (name = "") => {
  if (name === "") {
    return [];
  }

  name = name.toLowerCase();
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};

export default getHeroByName;
