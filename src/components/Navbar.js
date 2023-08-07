import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Art Gallery
      </Typography>
      <Button color="inherit" component={Link} to="/login">Login</Button>
      <Button color="inherit" component={Link} to="/register">Register</Button>
      <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
