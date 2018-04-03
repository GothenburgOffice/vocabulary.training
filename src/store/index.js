import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../modules';


export const history = createHistory();

const initialState = {
  authState: {
    signin: false,
    user: {
      uid: null,
      displayName: null
    },
  },
  popup: {
    message: '',
    isVisible: false,
    isGlobal: true
  }
};


const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

/* eslint-disable no-undef */
const environment = process.env.NODE_ENV || 'development';
/* eslint-enable no-undef */
if (environment === 'development') {
  /* eslint-disable no-console */
  console.log('DEV MODE! Loading devtools...');
  /* eslint-enable no-console */
  const devToolsExtension = window.window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
