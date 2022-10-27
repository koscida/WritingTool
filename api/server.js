const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const cors = require("cors");
const path = require("node:path");
require("dotenv").config();

// get routers
const project = require(__dirname + "/routes/project.js");
//
const character = require(__dirname + "/routes/character.js");
const organization = require(__dirname + "/routes/organization.js");
const culture = require(__dirname + "/routes/culture.js");
const artifact = require(__dirname + "/routes/artifact.js");
//
const magic = require(__dirname + "/routes/magic.js");
const language = require(__dirname + "/routes/language.js");
const location = require(__dirname + "/routes/location.js");
const atlas = require(__dirname + "/routes/atlas.js");
const timeline = require(__dirname + "/routes/timeline.js");
//
const profile = require(__dirname + "/routes/profile.js");
//

// app
const app = express();

// parse request of body
app.use(bodyParser.urlencoded({ extended: true }));
// use public static folder
app.use(express.static("public"));
// set view engine
app.set("view engine", "ejs");

// connect to mongodb
const mongooseDB = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(mongooseDB);

// test mongoose connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Connected successfully");
});

// include the routers for each sub page
app.use("/project", project);
//
app.use("/character", character);
app.use("/organization", organization);
app.use("/culture", culture);
app.use("/artifact", artifact);
//
app.use("/magic", magic);
app.use("/language", language);
app.use("/location", location);
app.use("/atlas", atlas);
app.use("/timeline", timeline);
//
app.use("/profile", profile);

// listen
app.listen(3000, () => {
	console.log("App listening on port 3000");
});
