const express = require("express");
const router = express.Router();
const { extend } = require("lodash");

const Video = require("../models/videoModel");

// @GET "/videos"
router.route("/").get(async(req, res) => {

  try {
    const videos = await Video.find({});

    res.json({ success: true, videos });

  } catch(error) {

    res.status(500).json({
      success: false,
      message: "Unable to fetch the videos",
      errMessage: err.message,
    });
  }
});

// @POST "/videos"
router.route("/").post(async(req, res) => {

  try {
    const video = req.body;
    video.date = Date.now();

    const newVideo = new Video(video);

    const savedVideo = await newVideo.save();

    res.status(201).json({ succes: true, video: savedVideo });

  } catch(error) {

    res.status(500).json({
      success: false,
      message: "Unable to add a new video",
      errMessage: error.message,
    });
  }
  
});

// @DELETE "/videos"
router.route("/").delete((req, res) => {
  res.send({ success: false, message: "vidoes DELETE API" });
});

// params
router.param("videoId", async (req, res, next, vId) => {

  try {

    const video = await Video.findById(vId);

    if (!video) {
      throw Error("Unable to fetch the video");
    }

    req.video = video;
    next();

  } catch (err) {

    res.status(400).json({ success: false, message: "Unable to retrive the video" });
  }

});

// @GET '/:videoId'
router.route("/:videoId").get(async(req, res) => {

  let { video } = req;

  res.json({ succes: true, video });
});

// @POST '/:videoId'
router.route('/:videoId').post(async(req, res) => {

  let { video } = req;
  const videoUpdatedData = req.body;

  video = extend(video, videoUpdatedData);
  video = await video.save();

  res.json({ succes: true, video });

});

// @DELETE '/:videoId'
router.route('/:videoId').delete((req, res) => {

  const { video } = req;
  res.json({ success: false, message: `single video: ${video} delete API`})
})

module.exports = router;
