//JS for the server

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cardImage = require('./models/tradingCardImages');
const rawImage = require('./models/rawImages');
const backgroundImage = require('./models/backgroundImages');
const app = express();

const dbURI = 'mongodb+srv://administrator:Isaiah01@images.5xl03.mongodb.net/card-images?retryWrites=true&w=majority';
const port = process.env.PORT || 3000
mongoose.connect(dbURI)
    .then((result) => app.listen(port) && console.log(`Starting server at ${port} and connected to db`))
    .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: false}));

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

app.patch('/api/setfavourite', (request, response) => {
    const data = request.body;
    const favouriteStatus = request.body.favouriteStatus;
    const id = request.body.modalImageID;

    cardImage.findOneAndUpdate({_id: id}, {favourite: favouriteStatus})
        .then((result) => {
            response.send(result)
        })
        .catch((err) => {
            console.log(err)
        });   
    response.json(data);
    console.log(id, favouriteStatus);
});

app.patch('/api/setstars', (request, response) => {
    const data = request.body;
    const starAmount = request.body.starAmount;
    const id = request.body.modalImageID;
    
    cardImage.findOneAndUpdate({_id: id}, {stars: starAmount})
        .then((result) => {
            response.send(result)
        })
        .catch((err) => {
            console.log(err)
        });   
    response.json(data);
    console.log(id, starAmount);
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

app.get('/all-backgrounds', (request, response) => {
    backgroundImage.find()
    .then((result) => {
        response.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
});

app.get('/all-poses', (request, response) => {
    poses.find()
    .then((result) => {
        response.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
});



app.patch('/all-backgrounds/setbackground', (request, response) => {
    const data = request.body;
    const backgroundType = request.body.backgroundImage;
    const id = "6183ac984b03a190742808f3";
    
    backgroundImage.findOneAndUpdate({_id: id}, {background: backgroundType})
        .then((result) => {
            response.send(result)
        })
        .catch((err) => {
            console.log(err)
        });   
    response.json(data);
    console.log(id, backgroundType);
});

app.patch('/all-backgrounds/setpose', (request, response) => {
    const data = request.body;
    const poseType = request.body.poseType;
    const id = "6183ac984b03a190742808f3";
    
    backgroundImage.findOneAndUpdate({_id: id}, {pose: poseType})
        .then((result) => {
            response.send(result)
        })
        .catch((err) => {
            console.log(err)
        });   
    response.json(data);
    console.log(id, poseType);
});

app.patch('/all-backgrounds/clear', (request, response) => {
    const data = request.body;
    const backgroundType = request.body.backgroundImage;
    const poseType = request.body.poseType;
    const id = "6183ac984b03a190742808f3";
    
    backgroundImage.findOneAndUpdate({_id: id}, {background: backgroundType})
        .then((result) => {
            response.send(result)
        })
        .catch((err) => {
            console.log(err)
        });

    backgroundImage.findOneAndUpdate({_id: id}, {pose: poseType})
        .then((result) => {
            response.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
    
    response.json(data);
    console.log(id, poseType);
});


