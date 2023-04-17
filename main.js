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

let comments = [
    {
        sn: uuid(),
        comment: 'Chlo movie dekhne chlte hain',
        user: 'Ritik',
        username: '@raj769417',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `4.png`
    },
    {
        sn: uuid(),
        comment: 'John wick 4 dekhte hai',
        user: 'Shubham',
        username: '@goswami420',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `2.png`
    },
    {
        sn: uuid(),
        comment: 'Waise Avatar 2 bhi release ho chuki h',
        user: 'Utkarsh',
        username: '@uvtgrt000',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `3.png`
    },
    {
        sn: uuid(),
        comment: 'Pehle bahar chlte h phit decide kr lege',
        user: 'Kshitij',
        username: '@kshiminu10',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `5.png`
    },
    {
        sn: uuid(),
        comment: 'Chlo movie dekhne chlte hain',
        user: 'Ritik',
        username: '@raj769417',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `4.png`
    },
    {
        sn: uuid(),
        comment: 'John wick 4 dekhte hai',
        user: 'Shubham',
        username: '@goswami420',
        time: `${date_time.getHours()}:${date_time.getMinutes()}`,
        date: `${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`,
        image: `2.png`
    }
]

app.get('/comments', (req, res) => {
    res.render('index', { comments });
})

app.get('/comments/show/:id', (req, res) => {
    const { id } = req.params;
    const requested_comment = comments.find(comment => comment.sn===id);
    res.render('comment', { ...requested_comment });
})

app.get('/comments/new', (req, res) => {
    res.render('create');
})


app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const requested_comment = comments.find(comment => comment.sn===id);
    const index = comments.indexOf(requested_comment);

    comments.splice(index, 1);

    res.redirect('/comments');
})

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.sn = uuid();
    comment.time=`${date_time.getHours()}:${date_time.getMinutes()}`;
    comment.date=`${("0" + date_time.getDate()).slice(-2)}/${("0" + date_time.getMonth()+1).slice(-2)}/${date_time.getFullYear()}`;
    comment.image='1.png';

    comments.push(comment);
    
    res.redirect('/comments');
})

app.get('*', (req, res) => {
    res.send("<h1> Not a valid route !!! </h1>");
})

app.listen(1234, () => {
    console.log("Listening on  port 1234...");
})