const Location = require("../models/location");

function index(req, res) {
  Location.find({}, function (err, locations) {
    if (err) return res.send(err.message);
    res.render("index", { title: "Toronto Tennis Courts", locations });
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
  console.log(req.body);
  Location.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.locationName,
      address: req.body.locationAddress,
      returnOriginal: false,
    },
    function (err, court) {
      if (err) return res.message(err);
      console.log(court);
      res.redirect("/");
    }
  );
}

function deleteLocation(req, res) {
  Location.deleteOne({ _id: req.params.id }, function (err) {
    if (err) return res.message(err);
  });
  Location.find({}, function (err, locations) {
    if (err) return res.send(err.message);
    res.render("index", { title: "Tennis Courts", locations });
  });
}

module.exports = {
  index,
  newLocation,
  create,
  updatePage,
  updateLocation,
  deleteLocation,
  newLocation,
};
