const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Map = mongoose.model("Map", mapSchema);

module.exports = { Map, mapSchema };
