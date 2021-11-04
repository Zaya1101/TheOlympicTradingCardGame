const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const rawImageSchema = new Schema({
    image64: {
        type: String,
        required: true
    }, 
    imageType: {
        type: String,
        required: true
    }, 
}, {timestamps: true});

const rawImages = mongoose.model('rawimages', rawImageSchema);
module.exports = rawImages;