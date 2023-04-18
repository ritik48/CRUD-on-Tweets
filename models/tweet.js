const mongoose = require('mongoose');

const getDate = () => {
    const d=new Date();
    return `${("0" + d.getDate()).slice(-2)}/${("0" + (d.getMonth()+1)).slice(-2)}/${d.getFullYear()}`;
}

const getTime = () => {
    const d=new Date();
    return `${d.getHours()}:${d.getMinutes()}`;
}

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
        default: () => getDate()
    },
    time: {
        type: String,
        default: () => getTime()
    },
    image: {
        type: String,
        required: true,
        default: '3.png'
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;