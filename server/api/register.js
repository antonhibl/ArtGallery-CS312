const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Input Validation
    if (!username || !email || !password) {
        console.log(username);
        console.log(email);
        console.log(password);
      return res.status(400).send("All fields are required");
  }

  // Check for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("User with this email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    email,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.redirect('/api/login');  // Redirect to login page after successful registration
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
