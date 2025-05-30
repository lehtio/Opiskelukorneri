import React from 'react';
import '../styles/Studies.css';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="home-container">
      {/* Taustakuva oikealle */}
      <div className="background-image"></div>

      {/* Varsinainen sisältö */}
      <div className="contentHome">
        <h1 className="titleHome">
          Tervetuloa oppimaan ja oivaltamaan <span className="highlight">Opiskelukorneriin</span>
        </h1>
        <p className="descriptionHome">
          Sikäli mikäli päädyit jo tälle sivulle ja sulla on jotain kysymyksiä tai haasteita, 
          heitä viestiä telegrammissa / muissa someissa &lt;3
        </p>
        <Footer /> {/* Footer täällä eikä App.jsx sillä halutaan sen näkuvän vain etusivulla */}
      </div>
      
    </div>
  );
};

export default Home;
