const port = 5000;
const express = require("express");
const app = express();

// parse json request body
app.use(express.json());

// router
const categoryRouter = require("./routers/category");
const userAuth = require("./routers/userAuthentication");

// routes
app.use("/category", categoryRouter);
app.use("/", userAuth);

// GET '/'
app.get("/", (req, res) => {
  res.send("API is running successfully");
});

// not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "The route you're looking for couldn't be found",
  });
});

// error
app.use((req, res, err, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: err.message });
});

// server
app.listen(process.env.PORT || port, () => {
  console.log("Server Started...");
});
