const bookingSchema = require('./booking');

const Schema = require('mongoose').Schema;

const checkoutSchema = new Schema({
<<<<<<< HEAD
  Price: Number,
  user: {type: Schema.Types.ObjectId, ref: "User"}
});


=======
  booking: { type: Schema.Types.ObjectId, ref: 'Booking' }
});

const Booking = model('Booking', bookingSchema)
>>>>>>> main
module.exports = checkoutSchema; 