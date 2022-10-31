var express = require("express");
var router = express.Router();
const locationCtrl = require("../controllers/locations");
/* GET home page. */
router.get("/", locationCtrl.index);
router.get("/locations", locationCtrl.newLocation);
router.post("/locations", locationCtrl.create);
router.get("/locations/:id/update", locationCtrl.updatePage);
router.put("/locations/:id", locationCtrl.updateLocation);
router.delete("/locations/:id", locationCtrl.deleteLocation);

module.exports = router;
