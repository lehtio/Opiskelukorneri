import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Olio from './Olio';
import Kandi from './Kandi';
import Vaihto from './Vaihto';
import Mallipolku from './Mallipolku';
import '../styles/Studies.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Router>
      <div className="home-container">
        {/* Navigaatio yläreunaan */}
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/mallipolku" className="nav-item">Mallipolku</Link></li>
            <li><Link to="/kandi" className="nav-item">Kandi</Link></li>
            <li><Link to="/vaihto" className="nav-item">Vaihto</Link></li>
            <li><Link to="/olio" className="nav-item">Oliot</Link></li>
          </ul>
        </nav>

        {/* Reitit */}
        <Routes>

         <Route path="/mallipolku" element={<Mallipolku />} />
          <Route path="/olio" element={<Olio />} />
          <Route path="/kandi" element={<Kandi />} />
          <Route path="/vaihto" element={<Vaihto />} />
        </Routes>

        {/* Etusivun sisältö */}
        <div className="content">
          <h1 className="title">Tervetuloa oppimaan ja oivaltamaan <span className="highlight">Opiskelukorneriin.</span></h1>
          <p className="description">
            Sikäli mikäli päädyit jo tälle sivulle ja sulla on jotain kysymyksiä tai haasteita, 
            heitä viestiä telegrammissa / muissa someissa &lt;3
          </p>
    <Footer />
        </div>
      </div>
    </Router>
  );
};

export default Home;