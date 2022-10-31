const Location = require("../models/location");

function index(req, res) {
  res.render("index", { title: "Tennis Courts" });
}

function newLocation(req, res) {
  res.render("locations/index");
}

function create(req, res) {
  res.redirect("/");
}

module.exports = {
  index,
  newLocation,
  create,
};
