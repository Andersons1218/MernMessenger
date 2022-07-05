// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Package = require('./models/package');
// const Category = require('./models/category');
const Checkout = require('./models/checkout');

// Local variables will come in handy for holding retrieved documents
let user, Package, category, order;
let users, Packages, categories, orders;