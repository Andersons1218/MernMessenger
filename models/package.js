const Schema = require('mongoose').Schema;

const packageSchema = new Schema({
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
user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true
});

module.exports = packageSchema; 