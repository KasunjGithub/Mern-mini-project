const mongoose = require("mongoose");

const dburl = "mongodb+srv://kasunj:mypw55%40%40@cluster0.nwyrq.mongodb.net/testDB?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        await mongoose.connect(dburl); // No need for additional options
        console.log("MongoDB Connected~");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
