import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyLoadable from './components/loader/myloadable';
import Popup from './components/global/popup';
import { Route } from 'react-router-dom';
import MainHeader from './components/global/mainheader';
import PropTypes from 'prop-types';

const MainScreen = MyLoadable({
  loader: () => import('./screens/mainscreen'),
});

const AccountScreen = MyLoadable({
  loader: () => import('./screens/mainscreen'),
});

const WordScreen = MyLoadable({
  loader: () => import('./screens/mainscreen'),
});

const CloudScreen = MyLoadable({
  loader: () => import('./screens/mainscreen'),
});

class App extends Component {
  render() {
    return (
      <div className="App h-100 w-100">
        <div>
          <MainHeader />
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/account/*" component={AccountScreen} />
          <Route exact path="/mywords/*" component={WordScreen} />
          <Route exact path="/cloud/*" component={CloudScreen} />
        </div>
        <Popup />
      </div>);
  }
}

App.propTypes = {

};


export default connect(null, null)(App);
