import React from 'react';
import Mallipolku from '../components/Mallipolku';
import '../styles/Mallipolku.css'; // Lisää oma CSS-tiedosto

const KandiPage = () => {
  return (
    <div>
      <h1>Mallipolku</h1>
      <Mallipolku />
      <p>Ja hei, aiotko jatkaa suoraan saman kandin maisteriin vai ootko miettiny olisko toinen maisteri sulle osuvampi?
        <br />
        Jos et oo varma, jyväskylän yliopisto tarjoaa monikärkikandeja (joihin tekniikan kanditkin kuuluu). Nää tarkottaa tutkintoja
        joissa pystyt vaihtamaan IT-tiedekunnan muihin maistereihin (KTM, DI ja FM) tietyin ehdoin ja ilman lisäopintoja ja ilman erillistä 
        yhteishakua. Monikärjissä täyttäessäs kandiehdot (keskiarvo jne), voit hakea valmistuttuasi toiseen maisteriin ilman yhteishakua ja pääsykokeita
      </p>
    </div>
  );
};

export default KandiPage;