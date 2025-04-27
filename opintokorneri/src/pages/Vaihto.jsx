import React from 'react';
import kuva from '../assets/mandariini.png'; // huom. korjattu import
import '../styles/Vaihto.css'; 

const Vaihto = () => {
  return (
    <div>
      <p>Ai vaihtoonko oot menossa? No täältä löytynee sulle sitten kivaa infoa aiheesta</p>
      <h1>Vaihtojutut</h1>
      
      <img src={kuva} alt="Mandariini" style={{ width: '200px', height: 'auto', display: 'block', margin: '2rem auto' }} />
      

      <h2>Unspoken säädöt ja ongelmat joita voit vaihdossa kohdata</h2>
      <h2>Unspoken voitot - syitä lähteä vaihtoon</h2>
      <p>Oletko koskaan miettinyt, mitä kaikkea voit saavuttaa vaihto-opinnoissa? Tässä muutamia syitä, miksi kannattaa harkita vaihtoa:</p> 
      <ul className="vaihto-list">
          <li>Klassikko: Uudet ystävät ja verkostot sekä kansainvälistyminen ja kielitaidon kehittyminen.</li>
          <li>Uudet kulttuurit ja kielet – vaihto on loistava aika aloittaa uuden kielen opiskelu, kuten itse tein! Kielen aloittaminen on helpompaa oikean kielisessä ympäristössä.</li>
          <li>Voit löytää tutkintoosi kokonaisen sivuaineen, jota kotiyliopisto ei pystynyt tarjoamaan. Esimerkiksi itse tein maisterin tutkintooni industrial managementin sivuaineen.</li>
        </ul>
      <h2>Taktikoi vaihto-opinnot - saa etumatkaa tutkintoon ja hae monipuolisempaa akateemista osaamista</h2>
    </div>
  );
};

export default Vaihto;