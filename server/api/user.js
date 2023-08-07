// server/api/user.js

const express = require('express');
const User = require('../models/User');
const verifyToken = require('../middleware/verifyTokens');
const router = express.Router();

// Get user data
router.get('/user', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
