// src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Art Gallery
      </Typography>
      <Button color="inherit">Login</Button>
      <Button color="inherit">Register</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
