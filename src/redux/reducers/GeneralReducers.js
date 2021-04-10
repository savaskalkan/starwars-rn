import {
  SET_PLANETS,
  SET_SELECTED_PLANET,
} from '../actions/types';

const INITIAL_STATE = {
  planets: [],
  selectedPlanet: {},
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return { ...state, planets: action.payload };
    case SET_SELECTED_PLANET:
      return { ...state, selectedPlanet: action.payload };

      
    default:
      return state;

  }
};