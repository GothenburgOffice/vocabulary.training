import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import popup from '../reducers/popup';


export default combineReducers({
  routing: routerReducer,
  popup,
});
