import firebase from '../../config/firebase';
import firebaseui from 'firebaseui';
import {Helmet} from 'react-helmet';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class LoginWidget extends Component {

  componentDidMount() {

    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      tosUrl: '/terms.html'
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  componentWillUnmount() {
    const ui = firebaseui.auth.AuthUI.getInstance();
    ui.delete();
  }

  render() {

    return (
      <div className="signin-field">
        <Helmet link={[
          { rel: 'stylesheet', href: 'https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css' }
        ]}/>
        <div id="firebaseui-auth-container"></div>
      </div>
    );
  }
}
export default connect(null, null)(LoginWidget);
