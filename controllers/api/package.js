const Package = require('../../models/package');
const Profile = require('../../models/Profile');

module.exports = {
   index,
  show,
  addOrder
};

async function index(req, res) {
  console.log('index')
  const package = await Package.find({}).sort('location').populate().exec();
    // const package = await Package.find({}).sort('location').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    // package.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(package);
    // console.log(package)
  }

async function show(req, res) {
  const package = await Package.findById(req.params.id);
  res.json(package);
}

async function addOrder(req, res) {
  const profile = await Profile.findById(req.body.profileid).populate('user')
  req.body.checkout.forEach((booking) => {
    profile.bookings.push(booking)
  })
  profile.save()
  console.log(profile)
  
}

