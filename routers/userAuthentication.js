const express = require("express");
const router = express.Router();
const userCredentials = require("../data/userCredentials");

// @GET '/login'
router.route("/login").get((req, res) => {
  res.json({ success: true, message: "User login API found" });
});

// @POST '/login'
router.route("/login").post((req, res) => {

    const { username:name, password } = req.body;

    userCredentials.forEach((user) => {

        if(user.username === name) {

            if(user.password === password) {
                res.status(200).json({ success: true, message: "User authenticated successfully"});
            }
            else {
                res.status(401).json({ success: false, message: "Username nad password do not match"});
            }
        }
    });

    res.status(401).json({ success: false, message: "User is not registered, please sign up"});
})

module.exports = router;
