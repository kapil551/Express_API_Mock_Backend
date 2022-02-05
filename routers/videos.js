const express = require("express");
const router = express.Router();

const { getVideos, addVideo, findVideo, deleteVideos, deleteVideo, updateVideo, getVideoById } = require("../controllers/videoController");

// @GET "/videos"
router.route("/").get(getVideos);

// @POST "/videos"
router.route("/").post(addVideo);

// @DELETE "/videos"
router.route("/").delete(deleteVideos);

// params
router.param("videoId", findVideo);

// @GET '/:videoId'
router.route("/:videoId").get(getVideoById);

// @POST '/:videoId'
router.route('/:videoId').post(updateVideo);

// @DELETE '/:videoId'
router.route('/:videoId').delete(deleteVideo);

module.exports = router;
