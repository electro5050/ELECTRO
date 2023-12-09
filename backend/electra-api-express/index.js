const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

// Import your Google Strategy configuration and User model
require('./config/passport');
const authRoutes = require('./routes/AuthRoutes');

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*' // Remember to restrict this in production to your frontend's origin
}));

// Use express-session for session management
app.use(session({
    secret: process.env.SESSION_SECRET, // Ensure this is a secure secret in your .env file
    resave: false,
    saveUninitialized: false,
    // Add additional options like cookie settings as needed
}));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});

// Routes
app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
