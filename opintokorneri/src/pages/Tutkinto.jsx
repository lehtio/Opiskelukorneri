import React from 'react';
import Mallipolku from '../components/Mallipolku';
import '../styles/Tutkinto.css'; // Lisää oma CSS-tiedosto

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
      <p>Täältä ajatuksia ja vinkkejä tutkintoon ja sen suunnitteluun</p>
      <h1>Tutkinto</h1>
      <Mallipolku />

      <h2>Jatkatko samaan maisteriin?</h2>
      <p>Ja hei, aiotko jatkaa suoraan saman kandin maisteriin vai ootko miettiny olisko toinen maisteri sulle osuvampi?
        <br />
        Jos et oo varma, jyväskylän yliopisto tarjoaa monikärkikandeja (joihin tekniikan kanditkin kuuluu). Nää tarkottaa tutkintoja
        joissa pystyt vaihtamaan IT-tiedekunnan muihin maistereihin (KTM, DI ja FM) tietyin ehdoin ja ilman lisäopintoja ja ilman erillistä 
        yhteishakua. Monikärjissä täyttäessäs kandiehdot (keskiarvo jne), voit hakea valmistuttuasi toiseen maisteriin ilman yhteishakua ja pääsykokeita
       
        <button className="monikarki-button" onClick={handleButtonClick}>
          Lue lisää monikärjestä
        </button>
      </p>
    </div>
  );
};

export default KandiPage;