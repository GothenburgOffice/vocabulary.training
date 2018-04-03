import React, { Component } from 'react';
import { connect } from 'react-redux';
import faSignInAlt from '@fortawesome/fontawesome-free-solid/faSignInAlt';
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faCloud from '@fortawesome/fontawesome-free-solid/faCloud';
import faArchive from '@fortawesome/fontawesome-free-solid/faArchive';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class MainHeader extends Component {


  render() {


    return (
      <div className="MainHeader">
        <nav className="MainNav primary-blue-bg">
          <div className="MainNavHeader mr-auto">Vocabulary.Training</div>
          <ul className="MainNavList ml-auto">
            <li className="MainNavItem"><FontAwesomeIcon icon={faPlus} /><div className="NavItemText">Add words</div></li>
            <li className="MainNavItem"><FontAwesomeIcon icon={faArchive} /><div className="NavItemText">Word archive</div></li>
            <li className="MainNavItem"><FontAwesomeIcon icon={faCloud} /><div className="NavItemText">Word cloud</div></li>
            <li className="MainNavItem"><FontAwesomeIcon icon={faUser} /><div className="NavItemText">Account</div></li>
            <li className="MainNavItem d-none"><FontAwesomeIcon icon={faSignInAlt} /><div className="NavItemText">Sign in</div></li>
            <li className="MainNavItem"><FontAwesomeIcon icon={faSignOutAlt} /><div className="NavItemText">Sign out</div></li>
            <li className="MainNavItem ml-3"><FontAwesomeIcon icon={faFacebook} /><div className="NavItemText">Facebook</div></li>

          </ul>

        </nav>

      </div>);
  }
}
export default connect(null, null)(MainHeader);
