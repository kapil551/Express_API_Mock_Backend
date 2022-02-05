const express = require("express");
const router = express.Router();
const { extend } = require('lodash');
const Product = require("../models/productModel");

// @GET "/products"
router.route("/").get(async(req, res) => {

    try {
        const products = await Product.find({});
        res.json({ succes: true, products });

    } catch(error) {

        res.status(500).json({
            success: false,
            message: "Unable to get the list of products",
            errMessage: err.message,
        });
    }
    
});

// @POST "/products"
router.route("/").post(async(req, res) => {
    try {
        const product = req.body;
        const newProduct = new Product(product);
        const savedProduct = await newProduct.save();

        res.status(201).json({ succes: true, product: savedProduct });

    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Unable to add product",
            errMessage: err.message,
        });
    }
});

// param
router.param("productId", async (req, res, next, proId) => {

    try {

        const product = await Product.findById(proId);
        if (!product) {
            throw Error("Unable to fetch the product");
        }

        req.product = product;
        next();

    } catch (err) {

        res.status(400).json({ success: false, message: "Unable to retrive the product" });
    }
});

// @GET "/products/:id"
router.route("/:productId").get(async(req, res) => {

    // console.log(req);
    // console.log(req.params);

    let { product } = req;
    // res.send({ success: false, message: `single product: ${id} GET API` });

    res.json({ success: true, product });
});

// @POST "/products/:id"
router.route("/:productId").post(async(req, res) => {

    let { product } = req;
    const productUpdatedData = req.body;
    product = extend(product, productUpdatedData);
    product = await product.save();

    res.json({ success: true, product });
});

// @DELETE "/products/:id"
router.route("/:productId").delete((req, res) => {

    let { product } = req;

    res.json({ success: false, message: `single product: ${product} DELETE API` })
});

module.exports = router;