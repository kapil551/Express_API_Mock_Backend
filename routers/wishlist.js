const express = require("express");
const router = express.Router();

// @GET '/wishlist'
router.route("/").get((req,res) => {
    res.json({ success: false, message: "Wishlist API" });
});

// params 'userId'
router.param("userId", (req,res) => {
    
});

// @GET '/wishlist/:userId'
router.route("/:userId").get((req,res) => {
    
});

// @POST '/wishlist/:userId'
router.route("/:userId").post((req,res) => {
    
});

module.exports = router;