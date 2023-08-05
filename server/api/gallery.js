const express = require('express');
const Artwork = require('../models/Artwork');
const verifyToken = require('../middleware/verifyTokens');
const router = express.Router();

router.get('/gallery', verifyToken, async (req, res) => {
  try {
    const artworks = await Artwork.find({ user: req.user.id }); // Get artworks uploaded by the user
    res.send(`
      <h1>${req.user.username}'s Gallery</h1>
      ${artworks.map(artwork => `
        <div>
          <img src="${artwork.imageUrl}" alt="${artwork.title}" />
          <h2>${artwork.title}</h2>
          <p>${artwork.description}</p>
        </div>
      `).join('')}
    `);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
