// src/pages/Home.jsx
import React from 'react';
import '../styles/Studies.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Tervetuloa oppimaan ja oivaltamaan <span className="highlight">Opiskelukorneriin.</span></h1>
        <p className="description">
          Sikäli mikäli päädyit jo tälle sivulle ja sulla on jotain kysymyksiä tai haasteita, 
          heitä viestiä telegrammissa / muissa someissa &lt;3
        </p>
      </div>
    </div>
  );
};

export default Home;
