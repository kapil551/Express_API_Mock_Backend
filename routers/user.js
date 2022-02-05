const express = require("express");
const router = express.Router();

const { getUsers,
    addUser,
    findUser,
    findUserById,
    getUserById,
    updateUser 
} = require("../controllers/userController");

// @GET '/users'
router.route("/").get(getUsers);

// @POST '/users/login'
router.route("/login").post(findUser);

// @POST '/users/signup'
router.route("/signup").post(addUser);

// params 'userId'
router.param("userId", findUserById);

// @GET '/users/:userId'
router.route("/:userId").get(getUserById);

// @POST '/users/:userId'
router.route("/:userId").post(updateUser);

module.exports = router;
