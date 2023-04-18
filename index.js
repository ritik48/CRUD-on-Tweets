const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {v4: uuid} = require('uuid');
const methodOverride = require('method-override');
const Tweet = require('./models/tweet');

mongoose.connect('mongodb://127.0.0.1:27017/tweets')
    .then(() => console.log("MONGOOSE CONNECTION ESTABLISHED."))
    .catch(() => console.log("MONGOOSE ERROR !!!"));
    

const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('static'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));


app.get('/tweets', async (req, res) => {
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

    res.redirect('/tweets');
})

app.post('/tweets', async (req, res) => {
    const tweet = req.body;

    tweet.image='1.png';

    const t1 = new Tweet(tweet);
    await t1.save();
    
    
    res.redirect('/tweets');
})

app.get('*', (req, res) => {
    res.send("<h1> Not a valid route !!! </h1>");
})

app.listen(1234, () => {
    console.log("Listening on  port 1234...");
})