const express = require('express');
const {User} = require('../models/User');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error('Missing required fields.');
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate a JWT token for the new user
    const payload = { userId: newUser.id };
    const token = jwt.sign(
      payload, 
      process.env.JWT_SECRET, 
      { expiresIn: 3600 } // Expires in 1 hour
    );

    // Send the token in the response
    res.status(201).json({
      message: 'User created successfully.',
      token,
      user: {
        id: newUser.id,
        ...newUser.toObject()
        // name: newUser.name,
        // email: newUser.email
      }
    });
  } catch (err) {
    console.error("General error during signup:", err);
    res.status(400).json({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(`Attempting to log in user: ${email}`);

    // Find user by email
    const user = await User.findOne({ email });

    console.log("Found user for login:", user);

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Password match result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // User matched. Create a token
    const payload = { userId: user.id };

    const token = jwt.sign(
      payload, 
      process.env.JWT_SECRET, 
      { expiresIn: 3600 } // Expires in 1 hour
    );

    res.json({
      token,
      user: {
        id: user.id,
        ...user.toObject()
        // name: user.name,
        // email: user.email
      }
    });

  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Server error." });
  }
});




module.exports = router;
