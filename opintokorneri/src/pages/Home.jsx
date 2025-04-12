import React, { useState } from 'react';
import Flashcard from '../components/Flashcard';
import flashcards from '../data/flashcards';
import Mallipolku from '../components/Mallipolku';
import Kandi from '../components/Kandi';
import '../styles/Studies.css';

const Home = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    );
    setShowDefinition(false);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setShowDefinition(false);
  };

  const handleFlip = () => {
    setShowDefinition(!showDefinition);
  };

  return (
    <div>
      {/* Navigaatio yläreunaan */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#flashcards" className="nav-item">Flashcardit</a></li>
          <li><a href="#kandi" className="nav-item">Kandi-ideat</a></li>
          <li><a href="#mallipolku" className="nav-item">Mallipolku</a></li>
          <li><a href="#vaihto" className="nav-item">Vaihtovinkit</a></li>
        </ul>
      </nav>
      <h1>Ai sää tarttisit jotain opiskeluun liittyviä matskuja?</h1>
        <p>
          Lisäilen tänne opintoja helpottavia dokkareita ja muuta kivaa kunhan
          sivujen rakentaminen etenee. Ajatuksena on ainakin lisätä omasta kokemuksesta suositeltava opintojen rakenne tieto- ja ohjelmistotekniikan kandin tutkintoon.
        </p>
      {/* Flashcard-osio */}
      <div id="flashcards" className="flashcard-container">
        <h2>Flashcardit olio-ohjelmointiin</h2>
        <p>
          Linkistä pääset Quizletistä löytyvään Olio-ohjelmoinnin kurssin
          käsitteiden{' '}
          <a
            href="https://quizlet.com/fi/839131703/olio-ohjelmointi-flash-cards/?i=384x9n&x=1jqY"
            target="_blank"
            rel="noopener noreferrer"
          >
            flashcardeihin
          </a>
          . Alla myös ite tehty vastaava jos Quizlet ei nappaa.
        </p>

        <h2>Olio-ohjelmoinnin käsitteet</h2>
        <Flashcard
          term={flashcards[currentCardIndex].term}
          definition={flashcards[currentCardIndex].definition}
          showDefinition={showDefinition}
        />

        <div className="button-row">
          <button onClick={handlePrevCard} className="prev-button">&#8592; Prev</button>
          <button onClick={handleFlip} className="flip-button">
            {showDefinition ? 'Show Term' : 'Show Definition'}
          </button>
          <button onClick={handleNextCard} className="next-button">Next &#8594;</button>
        </div>
      </div>

      {/* Kandi-aiheet */}
      <div id="kandi">
        <Kandi />
      </div>

      {/* Mallipolku */}
      <div id="mallipolku">
        <Mallipolku />
      </div>

       {/* Vaihtovinkit */}
       <div id="vaihto">
        <h1>Vaihtojutut</h1>
        ai vaihtoonko oot menossa?
      </div>
    </div>
  );
};

export default Home;
