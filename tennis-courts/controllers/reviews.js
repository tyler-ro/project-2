const Location = require("../models/location");

function create(req, res) {
  Location.findById(req.params.id, function (err, locations) {
    if (err) return res.send(err.message);
    Location.find({ _id: req.params.id }, function (err) {
      if (err) return res.send(err.message);
      res.redirect("/");
    });
  });
}

module.exports = { create };
