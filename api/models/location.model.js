const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = { Location, locationSchema };
