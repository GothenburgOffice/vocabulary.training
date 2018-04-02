import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Popup extends Component {

  render() {
    const {popup = null} = this.props;
    const {isVisible = false, isGlobal = false, message = ''} = popup;

    if (!isVisible || !isGlobal || message === '') {
      return null;
    }

    const wrapperStyle = {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      backgroundColor: 'rgba(255,255,255,.4)'
    };

    const boxStyle = {
      boxShadow: '1px 1px 10px #888888',
      padding: '5px',
      borderRadius: '10px',
      minWidth: '300px',
      minHeight: '200px',
      width: '40%',
      height: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      backgroundColor: 'rgb(255,255,255)'
    };

    return (
      <div className="Popup" style={wrapperStyle}>
        <div style={boxStyle}>
        Hello, I am an error!
        </div>
      </div>);
  }
}


Popup.propTypes = {
  popup:              PropTypes.object,
};

const mapStateToProps = state => ({
  popup:              state.popup,
});

export default connect(mapStateToProps, null)(Popup);
