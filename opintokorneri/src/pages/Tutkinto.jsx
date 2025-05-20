import React from 'react';
import Mallipolku from '../components/Mallipolku';
import '../styles/Tutkinto.css';
import kuva from '../assets/passion.png';

const KandiPage = () => {
  const handleButtonClick = () => {
    window.open(
      'https://www.jyu.fi/fi/it/opinto-oikeuden-siirto-toiseen-tutkinto-ohjelmaan-it-tiedekunnassa',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div>
      {/* Hero-osio */}
      <div className="hero-container-tutkinto">
        <div className="image-wrapper-tutkinto">
        <img src={kuva} alt="Passion" className="hero-image-tutkinto" />
        </div>
        <div className="hero-text-tutkinto">
          <h1 className="titleTutkinto">Tutkinto</h1>
          <p className="hero-summary-tutkinto">
            Täältä ajatuksia ja vinkkejä tutkintoon ja sen suunnitteluun. Alta löytyy myös vaihtoehtoinen mallipolku sekä tietoa maisterivaiheessa pääaineen vaihtamiseen monikärkikandin kautta.
          </p>
        </div>
      </div>




      



      {/* Muu sisältö */}
      <div className="studies-container">
        <Mallipolku />

        <h2 className="maisterivalinta">Jatkatko samaan maisteriin?</h2>
        <p className="maisterikyssari">
          Ja hei, aiotko jatkaa suoraan saman kandin maisteriin vai ootko miettiny olisko toinen maisteri sulle osuvampi?
        </p>

        <p className="maisterikyssari">
          Jos et oo varma, Jyväskylän yliopisto tarjoaa monikärkikandeja (joihin tekniikan kanditkin kuuluu). Nää tarkoittaa tutkintoja,
          joissa pystyt vaihtamaan IT-tiedekunnan muihin maistereihin (KTM, DI ja FM) tietyin ehdoin ja ilman lisäopintoja ja ilman erillistä
          yhteishakua.
          <br />
          <button className="monikarki-button" onClick={handleButtonClick}>
            Lue lisää monikärjestä
          </button>
        </p>
      </div>
    </div>
  );
};

export default KandiPage;
