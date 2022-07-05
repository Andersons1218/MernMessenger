const Package = require('../../models/packages');

module.exports = {
//   index,
  show
};

async function index(req, res) {
    const Packages = await Package.find({}).sort('location').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(items);
  }

async function show(req, res) {
  const Package = await Package.findById(req.params.id);
  res.json(Package);
}