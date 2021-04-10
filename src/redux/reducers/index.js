import { combineReducers } from 'redux';
import GeneralReducers from "./GeneralReducers";

export default combineReducers({
    GeneralResponse: GeneralReducers,
});