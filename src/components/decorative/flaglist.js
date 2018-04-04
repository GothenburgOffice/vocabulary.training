import React, { Component } from 'react';
import shuffle from '../../utils/shuffle';
import FlagIcon from 'react-flag-kit/lib/FlagIcon';

class FlagList extends Component {
  constructor(props) {
    super(props);
    const flagCodes = require('../../data/flag-codes-cut.json');
    const keyflagCodes = Object.keys(flagCodes);
    shuffle(keyflagCodes);
    let i = 59;
    if (keyflagCodes.lenght < 60) {
      i = keyflagCodes.lenght - 1;
    }
    const selectedCountries = keyflagCodes.slice(0,i);

    this.state = {
      showFlags: selectedCountries
    };
  }


  render() {

    const {showFlags = []} = this.state;


    /* eslint-disable react/forbid-component-props */
    const flagList = showFlags.map(flag =>
      <FlagIcon key={flag} code={flag} size={28} className="flag-icon-custom" />
    );
    /* eslint-enable react/forbid-component-props */


    return (
      <div style={{width: '98%', margin: '4px auto', position: 'relative', overflow: 'hidden'}}>
        <div style={{margin: '1px -100%', textAlign: 'center', whiteSpace: 'nowrap'}}>
          {flagList}
        </div>
      </div>);
  }
}
export default FlagList;
