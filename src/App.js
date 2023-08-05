import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import ArtworkDetail from './components/ArtworkDetail';
import UserAccount from './components/UserAccount';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/artwork/:id" component={ArtworkDetail} />
      <Route path="/account" component={UserAccount} />
    </Switch>
  </Router>
);

export default App;
