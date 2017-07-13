import { RECEIVE_ALL_POKEMON,RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let newstate = merge({},state);
      newstate = action.pokemon;
      return newstate;
    case RECEIVE_ONE_POKEMON:
      newstate = merge({},state);
      newstate.current_poke = action.pokemon.id;
      return newstate;
    default:
      return state;
  }
};

export default pokemonReducer;
