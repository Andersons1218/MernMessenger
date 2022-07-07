const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
location: String ,
hotel: String,
rating: String,
flight: String,
price: Number,
Date: Date,
car: String,
weatherKey: String,
location_img: String,
hotel_img: String,
flight_img: String,
car_img: String,
persons: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Package', packageSchema); 