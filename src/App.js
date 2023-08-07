import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import GalleryPage from './components/GalleryPage'
import ArtworkDetail from './components/ArtworkDetail';
import UserAccount from './components/UserAccount';
import Login from './components/Login';
import { AuthProvider } from './components/AuthContext';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <Router>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<PrivateRoute><GalleryPage /></PrivateRoute>} />
        <Route path="/artwork/:id" element={<PrivateRoute><ArtworkDetail /></PrivateRoute>} />
        <Route path="/account" element={<PrivateRoute><UserAccount /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;
