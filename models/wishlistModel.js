const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                }, 
                active: Boolean
            }
        ]
    }
)

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;