import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <a className="left brand-logo">
          Wishes
        </a>
        <ul className="right">
          <li><a>Login With Google</a></li>
          <li><a>Yer mam</a></li>

        </ul>

      </nav>
    )
  }
}

export default Header;
