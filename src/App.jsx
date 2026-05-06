import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArtPortfolio from './pages/ArtPortfolio';
import GDSNPortfolio from './pages/GDSNPortfolio';
import ProjectDetail from './pages/GDSNPortfolio/ProjectDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art-portfolio" element={<ArtPortfolio />} />
        <Route path="/gdsn-portfolio" element={<GDSNPortfolio />} />
        <Route path="/gdsn-portfolio/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
