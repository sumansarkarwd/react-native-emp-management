
import { Actions } from 'react-native-router-flux'; // New code

export const RANDOM_COCKTAIL_LOADED = 'RANDOM_COCKTAIL_LOADED';
export const SEARCH_RESULTS_FETCED = 'SEARCH_RESULTS_FETCED';

const randomCocktailLoaded = (cocktail) => {
  return {
    type: RANDOM_COCKTAIL_LOADED,
    cocktail,
  }
}

const cocktailSearchResultsFetched = (cocktails) => {
  return {
    type: SEARCH_RESULTS_FETCED,
    cocktails,
  }
}

const fetchData = (url) => {
  return fetch(url)
    .then(res => res.json())
}

export const fetchRandomCocktail = () => {
  return (dispatch) => {
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(json => {
        dispatch(randomCocktailLoaded(json.drinks[0]));
    });
  }
}

export const searchCocktail = (searchText) => {
  return (dispatch) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    fetchData(url).then(json => {
      // console.log(json.drinks);
      
      dispatch(cocktailSearchResultsFetched(json.drinks));
      // open search results page
      Actions.searchResults();
    });
  }
}