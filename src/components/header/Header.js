import React from 'react'
import  './header.scss';
import logo  from '../../logo.svg'
function Header() {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} alt='logo' className="logo" />
        <h1 className="title">ARC</h1>
      </div>
      <ul className="navbar__list">
        <li className="navbar__list--item">Features</li>
        <li className="navbar__list--item">How it works</li>
        <li className="navbar__list--item">Pricing</li>
        <li className="navbar__list--item">Sign in </li>
        <li className="navbar__list--item request">Request Access</li>
      </ul>
    </header>
  );
}

export default Header
