/*Full Trading Card */

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    image64: {
        type: String,
        required: true
    }, 
    imageType: {
        type: String,
        required: true
    }, 
    favourite: {
        type: Boolean,
        required: true
    }, 
    stars:{
        type: Number,
        required: true
    }, 
    rarity:{
        type: String,
        required: true
    }
}, {timestamps: true});

const CardImages = mongoose.model('TradingCards', cardSchema);
module.exports = CardImages;