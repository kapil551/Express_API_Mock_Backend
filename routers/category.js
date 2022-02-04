const express = require('express');
const router = express.Router();
const category = require('../data/category');

// @GET '/category'
router.route("/").get((req, res) => {
    console.log('Sending JSON Response');
    res.json(category);
});

let idCount = 126;

// @POST '/category'
// Test this reques in POSTMAN
router.route("/").post((req, res) => {

    // console.log(req.body);

    const newData = req.body;

    const newItem = { id: idCount++, ...newData };

    category.push(newItem);

    res.status(201).json({ status: "success", newItem });
});

// @GET '/:id'
router.route('/:id').get((req,res) => {

    // console.log(req);
    // console.log(req.params);

    const { id } = req.params;

    const singleItem = category.find((item) => item.id === parseInt(id,10));
    console.log(singleItem);

    if(singleItem === undefined) {
        res.json({ success: false, message: "item not found"});
    }

    res.json(singleItem);

});

// @POST '/:id
router.route('/:id').post((req, res) => {

    const { id:itemId } = req.params;
    // console.log(itemId);
    const updatedValue = req.body;
    // console.log(req.body);

    for(const item of category) {
        if(item.id === parseInt(itemId)) {
            Object.keys(updatedValue).forEach((key) => {
                if(key in item) {
                    item[key] = updatedValue[key];
                }
            })
        }
    }

    res.json({ status: "success", updatedValue });
});

// @DELETE '/:id'
router.route('/:id').delete((req, res) => {

    res.send({ success: false, message: `deleting category item with id: ${req.params.id}`});
})

module.exports = router;