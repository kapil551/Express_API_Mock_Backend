// connect Mongo DB to my express Application
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch(error) {
        console.log(`Error: ${error.message}`);
        process.exit();

    }
}

module.exports = connectDB;