var express = require("express");
var router = express.Router();
const reviewCtrl = require("../controllers/reviews");
const locationCtrl = require("../controllers/locations");

router.get("/", locationCtrl.index);
router.post("/locations/:id/reviews", reviewCtrl.create);

module.exports = router;
