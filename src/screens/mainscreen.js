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
        <img src={Welcome} alt="Welcome to Vocabulary.Training" style={{maxWidth: '100%', maxHeight: '80%'}}/>
        <div className="d-block d-md-none mt-5 pt-3">
          <LoginWidget />
        </div>
      </div>);
  }
}
export default connect(null, null)(MainScreen);
