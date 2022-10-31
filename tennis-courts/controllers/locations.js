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

function create(req, res) {
  const location = new Location(req.body);
  location.save((err) => {
    if (err) console.log(err.message);
  });
  console.log(location);
  res.redirect("/");
}

function updatePage(req, res) {
  let locationID = req.params.id;
  console.log(locationID);
  res.render("locations/update-location", { locationID });
}
function updateLocation(req, res) {
  // Location.find( location => console.log(location._id))
  res.redirect("/");
}
module.exports = {
  index,
  newLocation,
  create,
  updatePage,
  updateLocation,
};
