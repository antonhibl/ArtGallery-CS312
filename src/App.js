import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import GalleryPage from './components/GalleryPage'
import ArtworkDetail from './components/ArtworkDetail';
import UserAccount from './components/UserAccount';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/artwork/:id" element={<ArtworkDetail />} />
      <Route path="/account" element={<UserAccount />} />
    </Routes>
  </Router>
);

export default App;
