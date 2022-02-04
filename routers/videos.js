const express = require("express");
const router = express.Router();
const videos = require("../data/videos");

// @GET "/videos"
router.route("/").get((req, res) => {
  res.json(videos);
});

// @POST "/videos"
router.route("/").post((req, res) => {
  res.send({ success: false, message: "viodes POST API" });
});

// @DELETE "/videos"
router.route("/").delete((req, res) => {
  res.send({ success: false, message: "vidoes DELETE API" });
});

module.exports = router;
