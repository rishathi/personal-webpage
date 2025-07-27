import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArtPortfolio from './pages/ArtPortfolio';
import GDSNPortfolio from './pages/GDSNPortfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<ArtPortfolio />} />
        <Route path="/gdsn" element={<GDSNPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
