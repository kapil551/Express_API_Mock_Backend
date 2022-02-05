const port = 5000;
const express = require("express");
const dotenv = require("dotenv");

const app = express();

// parse json request body
app.use(express.json());
dotenv.config();

// connect database
const connectDB = require("./database/dbConnect");
connectDB();

// router
const categoryRouter = require("./routers/category");
const userRouter = require("./routers/user");
const videoRouter = require("./routers/videos");
const productRouter = require("./routers/products");
const cartRouter = require("./routers/cart");
const wishlistRouter = require("./routers/wishlist");

// middlewares
const errorHandler = require("./middlewares/errorHandler");
const routeHandler = require("./middlewares/routeHandler");

// routes
app.use("/category", categoryRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);

// middleware
app.use(routeHandler);
app.use(errorHandler);

// GET '/'
app.get("/", (req, res) => {
  res.send("API is running successfully");
});





// server
app.listen(process.env.PORT || port, () => {
  console.log("Server Started...");
});
