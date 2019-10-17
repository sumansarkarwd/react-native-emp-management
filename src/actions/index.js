
export const RANDOM_COCKTAIL_LOADED = 'RANDOM_COCKTAIL_LOADED';

const randomCocktailLoaded = (cocktail) => {
  return {
    type: RANDOM_COCKTAIL_LOADED,
    cocktail,
  }
}

const foo = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
}

export const fetchRandomCocktail = () => {
  return (dispatch) => {
    foo().then(json => {
        dispatch(randomCocktailLoaded(json.drinks[0].strDrinkThumb));   
    });
  }
}