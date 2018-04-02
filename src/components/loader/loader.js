import React, { Component } from 'react';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Textfit } from 'react-textfit';
import PropTypes from 'prop-types';

class Loader extends Component {

  render() {
    const {error, pastDelay, timedOut} = this.props;

    let firstline = 'Loading';
    let secondline = null;
    let icon = faSpinner;
    let pulse = true;

    const style = {
      width: '100%',
      height: '100%',
      padding: '3px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',


    };

    /* eslint-disable react/forbid-component-props */
    // TextFit needs relative heights to be applied directly on the component to scale properly
    const theLoader = (style, icon, pulse, firstline, secondline) =>
      <div className="Loader primary-blue" style={style}>
        <Textfit style={{height: '50%', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '1px'}} mode="single" forceSingleModeWidth={false} max={200} min={4} throttle={900}><FontAwesomeIcon icon={icon} pulse={pulse} /></Textfit>
        {firstline === 'Loading' ?
          <Textfit style={{height: '45%', width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '1px'}} mode="single" forceSingleModeWidth={false} max={40} min={4} throttle={900}><p className="loading px-4">{firstline}</p></Textfit> :
          <Textfit style={{height: '23%', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '1px'}} mode="multi" max={35} min={9} throttle={900}><p>{firstline}</p></Textfit>
        }
        {firstline === 'Loading' ? null :
          <Textfit style={{height: '21%', width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '1px'}} mode="multi" max={35} min={8} throttle={900}>{secondline}</Textfit>
        }

      </div>;
      /* eslint-enable react/forbid-component-props */

    if (error !== null) {
      // When the loader has errored
      firstline = 'An error occured loading the component!';
      secondline = 'Try refreshing the page by hitting F5.';
      icon = faFrown;
      pulse = false;
      return theLoader(style, icon, pulse, firstline, secondline);
    } else if (timedOut) {
      // When the loader has taken longer than the timeout
      firstline = 'Loading the component taking longer then expected!';
      secondline = 'Keep waiting (if you are on a slow connection) or try refresh by hitting F5.';
      icon = faFrown;
      pulse = false;
      return theLoader(style, icon, pulse, firstline, secondline);
    } else if (pastDelay) {
      // When the loader has taken longer than the delay
      firstline = 'Loading';
      secondline = null;
      icon = faSpinner;
      pulse = false;
      return theLoader(style, icon, pulse, firstline, secondline);
    } else {
      // When the loader has just started
      return null;
    }

  }
}

/* eslint-disable react/boolean-prop-naming */
Loader.propTypes = {
  pastDelay: PropTypes.bool,
  error: PropTypes.object,
  timedOut: PropTypes.bool,
};
/* eslint-enable react/boolean-prop-naming */

export default Loader;
