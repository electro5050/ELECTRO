
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    coinbalance:{
        type: Number,
        default: 10000
    },
    profilePictureUrl: { type: String }
});

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
