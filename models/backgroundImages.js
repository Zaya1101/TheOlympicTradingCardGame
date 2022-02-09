/*Background Image of the Backdrop */

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const backgroundImageSchema = new Schema({
    background: {
        type: String,
        required: false
    }, 
    pose: {
        type: String,
        required: false
    },
}, {timestamps: true});

const backgroundImage = mongoose.model('backgroundimages', backgroundImageSchema);
module.exports = backgroundImage;