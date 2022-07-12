const mongoose = require('mongoose')

const {Schema , model} = mongoose;
const profileSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: "User"},
  bookings: [Object]
});


module.exports = mongoose.model('Profile', profileSchema); 