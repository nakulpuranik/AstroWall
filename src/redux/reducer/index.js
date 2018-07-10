import { combineReducers } from 'redux';
import HomeReducer from '../modules/Home/HomeReducer';

export default combineReducers({
    home: HomeReducer
});