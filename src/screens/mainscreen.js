import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginWidget from '../components/firebase/login-widget';
import FlagList from '../components/decorative/flaglist';
import Welcome from '../images/welcome.png';

class MainScreen extends Component {

  render() {


    return (
      <div className="MainScreen text-center">
        <FlagList />
        <img src={Welcome} alt="Welcome to Vocabulary.Training" />
        <LoginWidget />
      </div>);
  }
}
export default connect(null, null)(MainScreen);
