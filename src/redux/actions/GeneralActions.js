import {
    SET_PLANETS,
    SET_SELECTED_PLANET
} from './types';

export const SetPlanets = (planets) => {
    return {
        type: SET_PLANETS,
        payload: planets
    };
};
export const SetSelectedPlanet = (planet) => {
    return {
        type: SET_SELECTED_PLANET,
        payload: planet
    };
};