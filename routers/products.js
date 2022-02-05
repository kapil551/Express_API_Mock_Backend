const express = require("express");
const router = express.Router();
const { extend } = require('lodash');
const { getProducts, addProducts, findProduct, getProductById, modifyProduct, deleteProduct } = require('../controllers/productsController');

// @GET "/products"
router.route("/").get(getProducts);

// @POST "/products"
router.route("/").post(addProducts);

// param
router.param("productId", findProduct);

// @GET "/products/:id"
router.route("/:productId").get(getProductById);

// @POST "/products/:id"
router.route("/:productId").post(modifyProduct);

// @DELETE "/products/:id"
router.route("/:productId").delete(deleteProduct);

module.exports = router;