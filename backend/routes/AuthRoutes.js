const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
app.use(express.json());


const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email,password } = req.body;

    if (!name || !email|| !password) {
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
    
    res.status(201).json({ message: 'User created successfully.' });
  } catch (err) {
    console.error("General error:", err);
    res.status(400).json({ message: err.message });
  }
});
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // User matched. Create a token
    const payload = { userId: user.id }; // Create JWT payload

    const token = jwt.sign(
      payload, 
      process.env.JWT_SECRET, 
      { expiresIn: 3600 } // 1 hour in seconds
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Server error." });
  }
});



module.exports = router;
