
const Schema = require('mongoose').Schema;
const mongoose = require('mongoose')

const checkoutSchema = new Schema({
  Price: Number,
  user: {type: Schema.Types.ObjectId, ref: "User"}
});


module.exports = mongoose.model('Checkout', checkoutSchema); 