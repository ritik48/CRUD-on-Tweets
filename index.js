const express = require('express');
const path = require('path');
const {v4: uuid} = require('uuid');
const methodOverride = require('method-override');


const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('static'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

let date_time = new Date();

let tweets = [
    {
        sn: uuid(),
        tweet: 'Chlo movie dekhne chlte hain',
        user: 'Ritik',
        username: '@raj769417',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `4.png`
    },
    {
        sn: uuid(),
        tweet: 'John wick 4 dekhte hai',
        user: 'Shubham',
        username: '@goswami420',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `2.png`
    },
    {
        sn: uuid(),
        tweet: 'Waise Avatar 2 bhi release ho chuki h',
        user: 'Utkarsh',
        username: '@uvtgrt000',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `3.png`
    },
    {
        sn: uuid(),
        tweet: 'Pehle bahar chlte h phit decide kr lege',
        user: 'Kshitij',
        username: '@kshiminu10',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `5.png`
    },
    {
        sn: uuid(),
        tweet: 'Chlo movie dekhne chlte hain',
        user: 'Ritik',
        username: '@raj769417',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `4.png`
    },
    {
        sn: uuid(),
        tweet: 'John wick 4 dekhte hai',
        user: 'Shubham',
        username: '@goswami420',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `2.png`
    }
]

app.get('/tweets', (req, res) => {
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


app.delete('/tweets/:id', (req, res) => {
    const { id } = req.params;
    const requested_tweet = tweets.find(tweet => tweet.sn===id);
    const index = tweets.indexOf(requested_tweet);

    tweets.splice(index, 1);

    res.redirect('/tweets');
})

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    tweet.sn = uuid();
    tweet.time=`${date_time.getHours()}:${date_time.getMinutes()}`;
    tweet.date=`${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`;
    tweet.image='1.png';

    tweets.push(tweet);
    
    res.redirect('/tweets');
})

app.get('*', (req, res) => {
    res.send("<h1> Not a valid route !!! </h1>");
})

app.listen(1234, () => {
    console.log("Listening on  port 1234...");
})