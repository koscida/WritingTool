const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relationshipSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Relationship = mongoose.model("Relationship", relationshipSchema);

module.exports = { Relationship, relationshipSchema };
