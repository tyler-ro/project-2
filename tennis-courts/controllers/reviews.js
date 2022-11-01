const Location = require("../models/location");

//   console.log(req.params.id);
function create(req, res) {
  //     Location.findById(req.params.id, function (err, locations) {
  //       if (err) return res.send(err.message);
  //       locations.reviews.push(req.body);
  //       locations.save(function (err) {
  //         if (err) return res.send(err.message);
  // res.redirect(`/location/${locations._id}`);
  //       });
  //     });
  //   }
  res.redirect("/");
}
module.exports = { create };
