const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: String,
        price: {
            type: Number,
            required: true,
        },
        brand: String,
        category: String,
        inStock: Boolean,
        fastDelivery: Boolean,
        rating: Number,
        offer: String
    }, 
    { timestamps: true }
)

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

/*
{
  "name":"AmazonBasics Adjustable Jump Rope",
  "image":"https://images-na.ssl-images-amazon.com/images/I/71UDlOh27XL._SL1500_.jpg",
  "price":350,
  "brand":"AmazonBasics",
  "category":"Speed jump rope",
  "inStock":true,
  "fastDelivery":true,
  "rating":4,
  "offer": "30% off"
}
*/