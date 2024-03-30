const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./MODEL/database");
const UserModel = require("./MODEL/UserModel");
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
console.log(UserModel);
app.get("/", async function (req, res) {
    const userData = await UserModel.find();
    console.log("Retrieved");
    res.send(userData);
});

app.listen(port, async () => {
    try {
        await db.connectToDb();
        console.log(`app listening on port ${port}`);
    } catch (error) {
        console.log(error);
    }
});
