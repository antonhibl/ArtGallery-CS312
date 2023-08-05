const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();

// GET endpoint for registration form
router.get('/register', (req, res) => {
  res.send(`
    <form method="POST" action="/api/register">
      <label>
        Username:
        <input type="text" name="username" required>
      </label>
      <label>
        Email:
        <input type="email" name="email" required>
      </label>
      <label>
        Password:
        <input type="password" name="password" required>
      </label>
      <button type="submit">Register</button>
    </form>
  `);
});

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
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
