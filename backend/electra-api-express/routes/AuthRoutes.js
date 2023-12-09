const express = require('express');
const passport = require('passport');
const { User } = require('../models/User');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

require('../config/passport'); // Import your Passport Google strategy setup

const router = express.Router();

// Trigger Google OAuth login
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Google OAuth callback route
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), async (req, res) => {
  console.log('OAuth Callback Route Invoked');

  try {
      const user = req.user; // User is already set by Passport strategy
      console.log(`User authenticated with ID: ${user.id}`);

      const payload = { userId: user.id };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });
      console.log('Token created:', token);
      res.redirect(`http://localhost:8000/game?token=${token}`);

  } catch (error) {
      console.error('Error during OAuth callback processing:', error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});






router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.isGoogleUser) {
        return res.status(400).json({ message: 'Email is already registered with Google. Please log in using Google.' });
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    await newUser.save();

    const payload = { userId: newUser.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

    res.status(201).json({
        message: 'User created successfully.',
        token,
        user: { id: newUser.id, ...newUser.toObject() }
    });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid email or password." });
    }

    if (user.isGoogleUser) {
        return res.status(400).json({ message: "Please log in using Google." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password." });
    }

    const payload = { userId: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

    res.json({ token, user: { id: user.id, ...user.toObject() } });
});



router.get('/facebook', passport.authenticate('facebook'));

// Facebook OAuth callback route
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), async (req, res) => {
    console.log('Facebook OAuth Callback Route Invoked');
    try {
        const user = req.user; // User is already set by Passport strategy
        console.log(`User authenticated with ID: ${user.id}`);

        const payload = { userId: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });
        console.log('Token created:', token);
        res.redirect(`http://localhost:8000/game?token=${token}`);
    } catch (error) {
        console.error('Error during Facebook OAuth callback processing:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});


module.exports = router;
