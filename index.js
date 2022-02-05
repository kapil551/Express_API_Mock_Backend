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
const userAuth = require("./routers/userAuthentication");
const videoRouter = require("./routers/videos");
const productRouter = require("./routers/products");

// middlewares
const errorHandler = require("./middlewares/errorHandler");
const routeHandler = require("./middlewares/routeHandler");

// routes
app.use("/category", categoryRouter);
app.use("/", userAuth);
app.use("/videos", videoRouter);
app.use("/products", productRouter);

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
