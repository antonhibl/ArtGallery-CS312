import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import GalleryPage from './components/GalleryPage'
import ArtworkDetail from './components/ArtworkDetail';
import UserAccount from './components/UserAccount';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

const AppContent = () => {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<PrivateRoute><GalleryPage /></PrivateRoute>} />
        <Route path="/artwork/:id" element={<PrivateRoute><ArtworkDetail /></PrivateRoute>} />
	<Route path="/account" element={<PrivateRoute><UserAccount /></PrivateRoute>} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  </Router>
);

export default App;
