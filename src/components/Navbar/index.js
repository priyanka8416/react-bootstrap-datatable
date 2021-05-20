import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../home.svg';
import './index.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
      <Link className="navbar-brand" to="/">
        <img className="brand" src={home} alt='home' />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/datatable" className="nav-link">DataTable</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
