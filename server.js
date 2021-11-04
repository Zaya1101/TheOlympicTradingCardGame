//JS for the server
/*const aws = require('aws-sdk');
const config = require('./config.json')

(async function() {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: config.aws.accessKey,
            secretAccessKey: config.aws.secretKey,
            region: 'ap-southeast-2'
        });

        const s3 = new aws.S3();
        const response = await s3.listObjectsV2({
            Bucket: 'digitalbackdropvalues'
        }).promise();
    
        console.log(response);

    } catch (e) {
        console.log('our error', e);
    }
})();*/


const { request, response, Router } = require('express');
const express = require('express');
const bodyParser = require('body-parser')
const Datastore = require('nedb');
//const multer = require('multer');
//const upload = multer({ dest: 'uploads/' });
const app = express();

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Starting server at ${port}`)
});

app.use(express.static('public'));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: false}));

const imageDatabase = new Datastore('database.db');
imageDatabase.loadDatabase();


app.get('/api', (request, response) => {
    imageDatabase.find ({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    imageDatabase.insert(data);
    response.json(data);
});

app.put('/api', (request, response) => {
    const favouriteValue = request.body.favouriteStatus;
    const idValue = request.body.modalImageID;
    //imageDatabase.update({_id: idValue}, {$set: { favourite: favouriteValue}}, {}, function(){});
    response.json(favouriteValue);
    console.log(idValue);
    console.log(favouriteValue);
});

