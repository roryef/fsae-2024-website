import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Subteams from './Subteams';
import Cars from './Cars';
import News from './News';
import Sponsors from './Sponsors';
import Join from './Join';
import Navbar from './Navbar';
import Footer from './Footer';
import Data from './Data';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subteams" element={<Subteams />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/news" element={<News />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/join" element={<Join />} />
        <Route path="/data" element={<Data />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
