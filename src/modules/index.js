import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import popup from '../reducers/popup';
import authState from '../reducers/authstate';


export default combineReducers({
  routing: routerReducer,
  authState,
  popup,
});
