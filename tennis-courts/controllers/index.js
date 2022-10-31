function index(req, res) {
  res.render("index", { title: "Tennis Courts" });
}

module.exports = {index}