const bookingSchema = require('./booking');

const Schema = require('mongoose').Schema;

const checkoutSchema = new Schema({
  Price: Number,
  user: {type: Schema.Types.ObjectId, ref: "User"}
});


const Booking = model('Booking', bookingSchema)
module.exports = checkoutSchema; 