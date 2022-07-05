const bookingSchema = require('./booking');

const Schema = require('mongoose').Schema;

const checkoutSchema = new Schema({
  booking: { type: Schema.Types.ObjectId, ref: 'Booking' }
});

const Booking = model('Booking', bookingSchema)
module.exports = checkoutSchema; 