import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlagIcon from '../components/flags/flagicon';
import shuffle from '../utils/shuffle';


class MainScreen extends Component {
  constructor(props) {
    super(props);
    const ISO3166 = require('../data/iso-3166-cut.json');
    const keyISO3166 = Object.keys(ISO3166);
    shuffle(keyISO3166);
    let i = 68;
    if (keyISO3166.lenght < 69) {
      i = keyISO3166.lenght - 1;
    }
    const selectedCountries = keyISO3166.slice(0,i);

    this.state = {
      showFlags: selectedCountries
    };
  }

  render() {

    const {showFlags = []} = this.state;


    /* eslint-disable react/forbid-component-props */
    const flagList = showFlags.map(flag =>
      <FlagIcon key={flag} code={flag.toLowerCase()} className="flag-icon-custom" />
    );
    /* eslint-enable react/forbid-component-props */


    return (
      <div className="MainScreen">
        <div style={{width: '98%', margin: 'auto', position: 'relative', overflow: 'hidden'}}>
          <div style={{margin: '1px -100%', textAlign: 'center', whiteSpace: 'nowrap'}}>
            {flagList}

          </div>
        </div>
      </div>);
  }
}
export default connect(null, null)(MainScreen);
