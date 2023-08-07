const express = require('express');
const multer = require('multer');
const Artwork = require('../models/Artwork');
const verifyToken = require('../middleware/verifyTokens');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const upload = multer({ storage: storage });


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
router.post('/gallery', verifyToken, upload.single('image'), async (req, res) => {
  try {
    const { title, description, user } = req.body;
    const imageUrl = req.file.path; // This assumes that multer is configured to store the file on disk

    const newArtwork = new Artwork({
      title,
      description,
      imageUrl,
      user,
    });

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

module.exports = router;
