const Location = require("../models/location");

function index(req, res) {
  Location.find({}, function (err, locations) {
    if (err) return res.send(err.message);
    res.render("index", { title: "Tennis Courts", locations });
  });
}

function newLocation(req, res) {
  res.render("locations/index");
}

function updatePage(req, res) {
  res.render("location/update-location");
}

function create(req, res) {
  const location = new Location(req.body);
  location.save((err) => {
    if (err) console.log(err.message);
  });
  console.log(location);
  res.redirect("/");
}

module.exports = {
  index,
  newLocation,
  create,
  updatePage,
};
