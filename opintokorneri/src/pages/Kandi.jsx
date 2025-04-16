import React from 'react';
import Kandi from '../components/Kandi';
import '../styles/Kandi.css'; // Lisää oma CSS-tiedosto

const KandiPage = () => {
  return (
    <div>
      <h1>Kandi-ideat</h1>
      <Kandi />
    </div>
  );
};

export default KandiPage;