import {combineReducers} from 'redux';
import {RANDOM_COCKTAIL_LOADED} from "../actions";

const randomCocktail = (state = null, action) => {
    switch (action.type) {
        case RANDOM_COCKTAIL_LOADED:
            return action.cocktail;
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({randomCocktail});

export default rootReducer;
