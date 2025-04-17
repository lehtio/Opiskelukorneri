import React from 'react';
import KandiAiheet from '../components/KandiAiheet';
import '../styles/Kandi.css'; 

const KandiPage = () => {
  return (
    <div>
      <h2 className="title">Vinkkejä kandia kirjoittaville</h2>
      <p>Täältä löytyy kootusti erilaisia kandiin (ja miksei DI-työhönkin) liittyviä juttuja joista voi enemmän tai vähemmän olla iloa ja hyötyä. 
        Alta löytyy muun muassa “helposti mokattavat huolimattomuusvirheet” -lista sekä kootusti erilaisia aiheideoita, joita aikojen saatossa on tullut pohdittua. Voit ottaa aiheita käyttöön ihan sellaisenaan tai käyttää inspiksenä, mut jos otat aiheen, laita mulle jooko viestiä ettei muut ota vahingossa samaa. Lueskelen ilolla kandeja ja antelen palautetta, joten jos kaipaat extra opponointia, pistä viestiä </p>
      <p>Ja hei, jos sulla on jotain vinkkejä tai ideoita mitä haluaisit jakaa, pistä ihmeessä viestiä! :)</p>
      <h3 className="subtitle">Helposti mokattavat huolimattomuusvirheet</h3>
      <p>Tässä listaus asioista mitkä kannattaa tarkistaa omassa kandissa. Nää tuntuu olevan toistuvia hutilointeja joita olis helppo välttää ja jotka pystyy tarkistamaan kerralla kirjotuksen lopussa (ja nou stress, nää ei oo paha juttu)</p>
      <ul>
        <li>Käy läpi kaikki lähdeviitteet. Suomen kielisessä tekstissä tekijöiden sukunimet pitää taivuttaa verbin mukaisiin muotoihin. Helpoin tapa taivuttaa nimiä on käyttää "citeyear"-komentoa jolla saat pelkästään lähteen viitteen latexilla.</li>
        <li>Jos sulla on tekstissä kuva/taulukko/graafi/tms niin siihen pitäis kyllä myös viitata tekstissä. Tarkista että kaikkiin kuvioihin ja ekstra elementteihin viitataan jossain kohtaa tekstiä :)</li>
        <li>Voit viitata myös omaan tekstiisi esimerkiksi: "Kuten luvussa 1 todetaan". Tällaisessa tilanteessa tarvitset teksin sisäinen viite olisi paikallaan (lisää oman tekstin sidosteisuutta)</li>
        <li>Jos käytät jotain tiettyä termiä, niin käytä sitä johdonmukaisesti koko tekstissä. Jos käytät synonyymejä, niin kerro heti alussa mitä termiä käytät ja mitä se tarkoittaa.</li>
        <li>Kun esittelet ekan kerran lyhenteen, olis hyvä kertoa myös se alkuperäistermi josta lyhenne tulee, jotta lukijalle on täysin selvää mistä puhut. Eli esimerkiksi kun mainitset ekan kerran suuret kielimallit niin laita perään (engl. Large Language Models, LLM). Ensimmäisen viitteen jälkeen et enää tarvii englannin kielistä tai kokonaista suomenkielen termiä vaan voit käyttää pelkkää lyhennettä. Toki jos tyyli sitä vaatii, niin myös sitä suomenkielistä termiä voi tän jälkeen käyttää yksinään</li>
        <li>Jos akateemisessa maailmassa on useampia termejä samalle sanalle, voit kandisi alussa / termin esimmäisen esiintymän kohdalla kertoa, miksi päätät käyttää juuri valitsemaasi termiä muiden sijasta. (Tämä erityisesti silloin, kun termiä käytetään englanniksi eikä suomenkielistä materiaalia aiheesta löyty) - Esim access rights = pääsyoikeudet/pääsyvaltuudet</li>      
      </ul>

      <p>Psst... jos tuntuu, että olet pyörittänyt tekstiäsi jo pitkään ja sen hahmottaminen alkaa mennä vaikeaksi, pyydä kaveria (tai vaikka mua) lukemaan ja kommentoimaan sitä.</p>
      <h3 className="subtitle">Aiheideoita</h3>
      <KandiAiheet />
    </div>
  );
};

export default KandiPage;