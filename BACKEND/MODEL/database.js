const mongoose = require("mongoose");

async function connectToDb() {
    await mongoose.connect("mongodb://127.0.0.1:27017/POSTIFYY");
    console.log("Connected to Db");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = { connectToDb };
