import {combineReducers} from 'redux';
import {RANDOM_COCKTAIL_LOADED, SEARCH_RESULTS_FETCED} from "../actions";

const randomCocktail = (state = null, action) => {
    switch (action.type) {
        case RANDOM_COCKTAIL_LOADED:
            return action.cocktail;
    
        default:
            return state;
    }
}

const searchResults = (state = [], action) => {
    console.log(action.cocktails);
    
    switch (action.type) {
        case SEARCH_RESULTS_FETCED:
            console.log('action.cocktails', action.cocktails);
            
            return action.cocktails;
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({randomCocktail, searchResults});

export default rootReducer;
