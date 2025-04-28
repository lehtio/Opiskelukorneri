// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Olio from './pages/Olio';
import Kandi from './pages/Kandi';
import Vaihto from './pages/Vaihto';
import Tutkinto from './pages/Tutkinto';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header näkyy kaikilla sivuilla */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutkinto" element={<Tutkinto />} />
          <Route path="/olio" element={<Olio />} />
          <Route path="/kandi" element={<Kandi />} />
          <Route path="/vaihto" element={<Vaihto />} />
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
