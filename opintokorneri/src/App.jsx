import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Yläreunan navigointipalkki */}
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-item">Home</Link>
            </li>
          </ul>
        </nav>

        {/* Reitit eri sivuille */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
