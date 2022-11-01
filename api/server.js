const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const cors = require("cors");
const path = require("node:path");
require("dotenv").config();

// get models
const { getRoutes } = require("./routes/routeHelper");
const { Artifact } = require("./models/artifact.model.js");
const { Character } = require("./models/character.model");
const { CharacterArc } = require("./models/characterArc.model.js");
const { Culture } = require("./models/culture.model");
const { Language } = require("./models/language.model.js");
const { Location } = require("./models/location.model");
const { MagicSystem } = require("./models/magicSystem.model.js");
const { Manuscript } = require("./models/manuscript.model");
const { Map } = require("./models/map.model.js");
const { Organization } = require("./models/organization.model");
const { Plot } = require("./models/plot.model");
const { Profile } = require("./models/profile.model.js");
const { Project } = require("./models/project.model");
const { Relationship } = require("./models/relationship.model");
const { Religion } = require("./models/religion.model");
const { Theme } = require("./models/theme.model.js");
const { Timeline } = require("./models/timeline.model");

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
	// console.log("Connected successfully");
});

// get all object routes
[
	["/artifact", Artifact],
	["/character", Character],
	["/characterArc", CharacterArc],
	["/culture", Culture],
	["/language", Language],
	["/location", Location],
	["/magicSystem", MagicSystem],
	["/manuscript", Manuscript],
	["/map", Map],
	["/organization", Organization],
	["/plot", Plot],
	["/profile", Profile],
	["/project", Project],
	["/relationship", Relationship],
	["/religion", Religion],
	["/theme", Theme],
	["/timeline", Timeline],
].forEach(([uri, model]) => {
	// get routes
	const subRouter = getRoutes(uri, model);

	// use route
	app.use(uri, subRouter);
});

// listen
app.listen(3000, () => {
	console.log("App listening on port 3000");
});
