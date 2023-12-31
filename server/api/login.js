const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

// POST endpoint for login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Input Validation
  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }

  // Check for existing user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("User with this email does not exist");
  }

  // Check password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid password");
  }

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.status(200).json({ token });
});

module.exports = router;

