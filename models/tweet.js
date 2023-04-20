const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    tweet: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    image: {
        type: String,
        required: true,
        default: '3.png'
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;