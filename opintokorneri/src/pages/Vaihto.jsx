import React from 'react';
import kuva from '../assets/mandariini.png';
import '../styles/Vaihto.css';

const Vaihto = () => {
  return (
    <div className="containerVaihto">
      
      {/* Hero section */}
      <div className="hero-container">
        <div className="image-wrapper">
          <div className="circle-bg"></div>
          <img src={kuva} alt="Mandariini" className="hero-image" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Vaihtojutut</h1>
          <p className="hero-summary">Ai mitä, onko vaihto kutkutellu mielessä? Täältä löydät ajatuksia vaihdosta ja siitä, mitähän sellaisesta hurvittelusta voisi hyötyä!</p>
        </div>
      </div>

      {/* Existing content */}
      <h2 className="valiotsikkoVaihto">Unspoken säädöt ja ongelmat joita voit vaihdossa kohdata</h2>
      <p>Tänne listaa kunhan aikaa riittää</p>

      <h2 className="valiotsikkoVaihto">Unspoken voitot - syitä lähteä vaihtoon</h2>
      <p className="vaihtokommentti">Oletko koskaan miettinyt, mitä kaikkea voit saavuttaa vaihto-opinnoissa? Tässä muutamia syitä, miksi kannattaa harkita vaihtoa:</p> 
      <ul className="vaihto-list">
        <li>Klassikko: Uudet ystävät ja verkostot sekä kansainvälistyminen ja kielitaidon kehittyminen.</li>
        <li>Uudet kulttuurit ja kielet – vaihto on loistava aika aloittaa uuden kielen opiskelu, kuten itse tein! Kielen aloittaminen on helpompaa oikean kielisessä ympäristössä.</li>
        <li>Voit löytää tutkintoosi kokonaisen sivuaineen, jota kotiyliopisto ei pystynyt tarjoamaan. Esimerkiksi itse tein maisterin tutkintooni industrial managementin sivuaineen.</li>
      </ul>

      <h2 className="valiotsikkoVaihto">Taktikoi vaihto-opinnot - saa etumatkaa tutkintoon ja hae monipuolisempaa akateemista osaamista</h2>
      <p>Tänne ajatuksia kunhan aikaa riittää</p>
    </div>
  );
};

export default Vaihto;
