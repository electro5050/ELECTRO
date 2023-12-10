
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.']
    },
    userId: { type: String },
    password: {
        type: String,
        minlength: 8,
        required: function() {
            return !this.isGoogleUser && !this.isFacebookUser;
        }
    },
    isGoogleUser: { type: Boolean, default: false },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    isFacebookUser: { type: Boolean, default: false }, // New field for Facebook
    facebookId: { // New field for Facebook User ID
        type: String,
        unique: true,
        sparse: true
    },
    coinbalance: { type: Number, default: 10000 },
    profilePictureUrl: { type: String }
});


// Add pre-save hook for logging
userSchema.pre('save', function (next) {
    console.log(`Pre-save hook triggered for user: ${this.email}`);
    
    if (!this.userId) {
        const emailPrefix = this.email.slice(0, this.email.indexOf('@')).slice(0, 5);
        const uniqueId = uuidv4().slice(-4);
        this.userId = emailPrefix + uniqueId;
    }

    next();
});

// User virtuals and other settings
userSchema.virtual('UserId').get(function () {
    const emailPrefix = this.email.slice(0, this.email.indexOf('@')).slice(0, 10);
    const idSuffix = this._id.toString().slice(-5);
    return emailPrefix + idSuffix;
});

userSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('User', userSchema);

// Main Game schema
const gameSchema = new mongoose.Schema({
    start_time: {
        type: Date,
    },
    end_time: {
        type: Date,
    },
    winning_color: {
        type: String,
    },
    winners: {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        bidAmount: Number,
        winningBonus: Number
    }
});

const Game = mongoose.model('Game', gameSchema);


// User Bid schema
const userBidSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model

    },
    bid_amount: {
        type: Number,

    },
    coin_type: {
        type: String,

    },
    game: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',  // Reference to the Game model
    }
});

const UserBid = mongoose.model('UserBid', userBidSchema);


// notifications schema 

const notificationSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    message: {
        type: String,
    },
    imageUrl: String,   // URL of the image
    timestamp: {
        type: Date,
        default: Date.now  // set default to current time
    }
});

const Notification = mongoose.model('Notification', notificationSchema);




module.exports = { User, Game, UserBid,Notification };
