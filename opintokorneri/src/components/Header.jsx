
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // luodaan erillinen tyyli tarvittaessa

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/tutkinto" className="nav-item">Tutkinto</Link></li>
        <li><Link to="/kandi" className="nav-item">Kandi</Link></li>
        <li><Link to="/vaihto" className="nav-item">Vaihto</Link></li>
        <li><Link to="/olio" className="nav-item">Oliot</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
