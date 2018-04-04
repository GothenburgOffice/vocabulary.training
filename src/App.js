import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyLoadable from './components/loader/myloadable';
import Popup from './components/global/popup';
import { Route } from 'react-router-dom';
import { bindActionCreators }from 'redux';
import MainHeader from './components/global/mainheader';
import Privacy from './components/privacy';
import firebase from './config/firebase';
import {FirebaseAuthState} from './actions';
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

  componentWillMount() {
    const {FirebaseAuthState = () => {}} = this.props;
    console.log(firebase.auth().currentUser)
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        FirebaseAuthState(true, user)
        console.log(user)
        console.log(firebase.auth().currentUser)
      } else {
        FirebaseAuthState(false, null)
        console.log('no')
        console.log(user)
        console.log(firebase.auth().currentUser)
      }
    });
  }

  signOut = () => {firebase.auth().signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
  }

  render() {
    return (
      <div className="App h-100 w-100">
        <div>
          <MainHeader />
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/account/*" component={AccountScreen} />
          <Route exact path="/mywords/*" component={WordScreen} />
          <Route exact path="/cloud/*" component={CloudScreen} />
          <Route exact path="/terms.html" component={Privacy} />
        </div>
        <Popup />
        <button onClick={this.signOut}>Sign off!</button>
      </div>);
  }
}

App.propTypes = {
  FirebaseAuthState:  PropTypes.func,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  FirebaseAuthState
}, dispatch);


export default connect(null, mapDispatchToProps)(App);
