import { combineReducers } from 'redux';
import pokemonsReducer from './randomPokemon';

const rootReducer = combineReducers({
  entities: pokemonsReducer,
});

export default rootReducer;
