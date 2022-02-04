const express = require("express");
const router = express.Router();
const products = require("../data/products");

// @GET "/products"
router.route("/").get((req, res) => {
    res.json(products);
});

// @POST "/products"
router.route("/").post((req, res) => {
    res.send({ success: false, message: "products POST API"});
});

// @GET "/products/:id"
router.route("/:id").get((req, res) => {

    // console.log(req);
    // console.log(req.params);

    const { id } = req.params;
    // res.send({ success: false, message: `single product: ${id} GET API` });

    const productData = products.find((product) => product.id === parseInt(id));
    // console.log(productData);

    if(productData === undefined) {
        res.json({ success: false, message: "product does not exists"})
    }

    res.json(productData);
});

// @POST "/products/:id"
router.route("/:id").post((req, res) => {

    const { id } = req.params;
    res.send({ success: false, message: `single product: ${id} POST API` })
});

// @DELETE "/products/:id"
router.route("/:id").delete((req, res) => {

    const { id } = req.params;
    res.send({ success: false, message: `single product: ${id} DELETE API` })
})

module.exports = router;