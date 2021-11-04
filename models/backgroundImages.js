const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const backgroundImageSchema = new Schema({
    background: {
        type: String,
        required: true
    }, 
}, {timestamps: true});

const backgroundImage = mongoose.model('backgroundimages', backgroundImageSchema);
module.exports = backgroundImage;