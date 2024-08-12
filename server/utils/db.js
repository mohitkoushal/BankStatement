const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI = process.env.MONGODB_URI;

// mongoose.connect();
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Done....M")
    } catch (error) {
        console.log(error)
        console.error("db not connect");
        process.exit(0);
    }
}

module.exports = connectDb;