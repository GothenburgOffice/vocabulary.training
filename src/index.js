import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';
import MyLoadable from './components/loader/myloadable';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.css';

const target = document.querySelector('#root');


const App = MyLoadable({
  loader: () => import('./App'),
});


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
