const Checkout = require('../../models/checkout');


module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
};

//A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Checkout.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Checkout.getCart(req.user._id);
  // The promise resolves to the document, which we already have
  // in the cart variable, so no need to create another variable...
  await cart.addPackageToCart(req.params.id); 
  res.json(cart);
}

// Updates an item in the cart's qty
async function setPackageQtyInCart(req, res) {
  const cart = await Checkout.getCart(req.user._id);
  await cart.setPackageQty(req.body.itemId, req.body.newQty); 
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Checkout.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save(); 
  res.json(cart);
}