require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {v4: uuid} = require('uuid');
const methodOverride = require('method-override');
const Tweet = require('./models/tweet');


const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('static'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 1234;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

app.get('/', async (req, res) => {
    const tweets = await Tweet.find({});
    res.render('index', { tweets });
})

app.get('/tweets/show/:id', (req, res) => {
    const { id } = req.params;
    const requested_tweets = tweets.find(tweet => tweet.sn===id);
    res.render('tweet', { ...requested_tweet });
})

app.get('/tweets/new', (req, res) => {
    res.render('create');
})


app.delete('/tweets/:id', async (req, res) => {
    const { id } = req.params;

    await Tweet.findByIdAndDelete(id);

    res.redirect('/');
})

app.post('/tweets', async (req, res) => {
    const tweet = req.body;
    tweet.image =`${Math.floor(Math.random() * 4) + 1}.png`;

    const t1 = new Tweet(tweet);
    await t1.save();
    
    
    res.redirect('/');
})

app.get('*', (req, res) => {
    res.send("<h1> Not a valid route !!! </h1>");
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on  port ${PORT}...`);
    })
});

