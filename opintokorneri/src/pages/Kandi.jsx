import React from 'react';
import KandiAiheet from '../components/KandiAiheet';
import '../styles/Kandi.css'; 
import kuva from '../assets/sitruuna.png'; // huom. korjattu import

      /*Lisää tänne myöshighlightit Home sivun tapaan*/

const KandiPage = () => {
  return (
    <div className="containerKandi">
      {/* Hero Section */}
      <div className="hero-container-kandi">
        <div className="image-wrapper-kandi">
          <div className="circle-bg-kandi"></div>
          <img src={kuva} alt="Sitruuna" className="hero-image-kandi" />
        </div>
        <div className="hero-text-kandi">
          <h2 className="titleKandi">Vinkit kandiin</h2>
          <p className="hero-summary-kandi">
          Täältä löytyy kootusti erilaisia kandiin (ja miksei DI-työhönkin) liittyviä juttuja joista voi enemmän tai vähemmän olla iloa ja hyötyä. 
   </p>
        </div>
      </div>
     
      <div className="tips-section">
        <h3 className="subtitleKandi">Helposti mokattavat huolimattomuusvirheet</h3>
        <p>Tässä listaus asioista mitkä kannattaa tarkistaa omassa kandissa. Nää tuntuu olevan toistuvia hutilointeja joita olis helppo välttää ja jotka pystyy tarkistamaan kerralla kirjoituksen lopussa (ja nou stress, nää ei oo paha juttu):</p>
        <ul className="tips-list">
          <li>Käy läpi kaikki lähdeviitteet. Suomen kielisessä tekstissä tekijöiden sukunimet pitää taivuttaa verbin mukaisiin muotoihin. Helpoin tapa taivuttaa nimiä on käyttää "citeyear"-komentoa jolla saat pelkästään lähteen viitteen latexilla.</li>
          <li>Jos sulla on tekstissä kuva/taulukko/graafi/tms niin siihen pitäis kyllä myös viitata tekstissä. Tarkista että kaikkiin kuvioihin ja ekstra elementteihin viitataan jossain kohtaa tekstiä :)</li>
          <li>Voit viitata myös omaan tekstiisi esimerkiksi: "Kuten luvussa 1 todetaan". Tällaisessa tilanteessa tarvitset tekstin sisäisen viitteen (lisää oman tekstin sidosteisuutta).</li>
          <li>Jos käytät jotain tiettyä termiä, niin käytä sitä johdonmukaisesti koko tekstissä. Jos käytät synonyymejä, niin kerro heti alussa mitä termiä käytät ja mitä se tarkoittaa.</li>
          <li>Kun esittelet ekan kerran lyhenteen, olis hyvä kertoa myös se alkuperäistermi josta lyhenne tulee. Esimerkiksi: suuret kielimallit (engl. Large Language Models, LLM).</li>
          <li>Jos akateemisessa maailmassa on useampia termejä samalle sanalle, voit kandisi alussa / termin ensimmäisen esiintymän kohdalla kertoa miksi päätät käyttää juuri valitsemaasi termiä muiden sijasta. (Esim. access rights = pääsyoikeudet/pääsyvaltuudet)</li>      
        </ul>
      </div>

      <p>Psst... jos tuntuu, että olet pyörittänyt tekstiäsi jo pitkään ja sen hahmottaminen alkaa mennä vaikeaksi, pyydä kaveria (tai vaikka mua) lukemaan ja kommentoimaan sitä.</p>
      
      <h3 className="subtitleKandi">Aiheideoita</h3>
      <KandiAiheet />
    </div>
  );
};

export default KandiPage;
