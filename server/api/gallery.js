const express = require('express');
const Artwork = require('../models/Artwork');
const verifyToken = require('../middleware/verifyTokens');
const router = express.Router();

// Get artworks uploaded by the user
router.get('/gallery', verifyToken, async (req, res) => {
  try {
    const artworks = await Artwork.find({ user: req.user.id });
    res.json(artworks);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add a new artwork
router.post('/gallery', verifyToken, async (req, res) => {
  try {
    const newArtwork = new Artwork({ ...req.body, user: req.user.id });
    const savedArtwork = await newArtwork.save();
    res.json(savedArtwork);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete an artwork
router.delete('/gallery/:id', verifyToken, async (req, res) => {
  try {
    const deletedArtwork = await Artwork.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json(deletedArtwork);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Edit an artwork
router.put('/gallery/:id', verifyToken, async (req, res) => {
  try {
    const updatedArtwork = await Artwork.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true });
    res.json(updatedArtwork);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
