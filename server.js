//JS for the server

//const { request, response, Router } = require('express');
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cardImage = require('./models/tradingCardImages')
const rawImage = require('./models/rawImages')
const backgroundImage = require('./models/backgroundImages')
//const Datastore = require('nedb');
//const multer = require('multer');
//const upload = multer({ dest: 'uploads/' });
const app = express();

const dbURI = 'mongodb+srv://administrator:Isaiah01@images.5xl03.mongodb.net/card-images?retryWrites=true&w=majority';
const port = process.env.PORT || 3000
mongoose.connect(dbURI)
    .then((result) => app.listen(port) && console.log(`Starting server at ${port} and connected to db`))
    .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: false}));

//const database = new Datastore('database.db');
//database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;

    if (data.imageType === "RawImage") {
        const sendRawImage = new rawImage(data)
        sendRawImage.save()
        .then((result) => {
            response.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
    }
    if (data.imageType === "TradingCard") {
        const sendCardImage = new cardImage(data)
        sendCardImage.save()
        .then((result) => {
            response.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
    }        
    response.json(data);
});

app.get('/all-raw-images', (request, response) => {
    rawImage.find()
    .then((result) => {
        response.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
});  

app.get('/all-card-images', (request, response) => {
    cardImage.find()
    .then((result) => {
        response.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
});

app.patch('/all-card-images', (request, response) => {
    const favouriteValue = request.body.favouriteStatus;
    const idValue = request.body.modalImageID;
    response.json(favouriteValue);
    console.log(idValue);
    console.log(favouriteValue);
});

