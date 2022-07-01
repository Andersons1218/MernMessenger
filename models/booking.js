const Schema = require('mongoose').Schema;

const bookingSchema = new Schema({
location: String ,
hotel: String,
rating: String,
flight: String,
price: Number,
Date: Date,
Car: String,
locaiton_img: String,
hotel_img: String,
flight_img: String,
car_img: String,
}, {
  timestamps: true
});

module.exports = bookingSchema; 