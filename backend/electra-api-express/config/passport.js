const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models/User');
const FacebookStrategy = require('passport-facebook').Strategy;



passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID, // Use environment variable for Facebook App ID
    clientSecret: process.env.FACEBOOK_APP_SECRET, // Use environment variable for Facebook Secret
    callbackURL: "http://localhost:3001/auth/facebook/callback" // Full URL for callback
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(`Looking for user with Facebook ID: ${profile.id}`);
        let currentUser = await User.findOne({ facebookId: profile.id });
        if (currentUser) {
            console.log('User found with Facebook ID:', currentUser.email);
            return done(null, currentUser);
        }
        // Add more logic as needed
        // ...

        console.log('Creating new user...');
        let newUser = await new User({
            name: profile.displayName,
            email: profile.emails[0].value, // Ensure your User model can handle cases where email might not be provided
            facebookId: profile.id,
            isFacebookUser: true
        }).save();
        console.log('New user created:', newUser);
        return done(null, newUser);
        
    } catch (error) {
        console.error('Error in Facebook strategy:', error);
        return done(error);
    }
  }
));



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3001/auth/google/callback' // Full URL for callback
},
async (accessToken, refreshToken, profile, done) => {
    console.log("Google strategy invoked");
    try {
        console.log(`Looking for user with Google ID: ${profile.id}`);
        let currentUser = await User.findOne({ googleId: profile.id });
        if (currentUser) {
            console.log('User found with Google ID:', currentUser.email);
            return done(null, currentUser);
        }
        console.log(`User not found with Google ID. Checking by email: ${profile.emails[0].value}`);
        let userExists = await User.findOne({ email: profile.emails[0].value });
        if (userExists) {
            console.error('Email already exists:', userExists.email);
            return done(null, false, { message: "Email already registered." });
        }

        console.log('Creating new user...');
        let newUser = await new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            isGoogleUser: true
        }).save();
        console.log('New user created:', newUser);
        return done(null, newUser);
        
    } catch (error) {
        console.error('Error in Google strategy:', error);
        return done(error);
    }
})
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    }).catch(error => done(error, null));
});
