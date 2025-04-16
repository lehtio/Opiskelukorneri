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
      <h3 className="subtitle">Aiheideoita</h3>
      <KandiAiheet />
    </div>
  );
};

export default KandiPage;