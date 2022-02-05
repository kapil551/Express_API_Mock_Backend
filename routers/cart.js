const express = require("express");
const router = express.Router();

// @GET '/cart'
router.route("/").get((req, res) => {
    res.json({ success: false, message: "Cart API" });
});

module.exports = router;