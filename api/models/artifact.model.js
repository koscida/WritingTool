const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artifactSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Artifact = mongoose.model("Artifact", artifactSchema);

module.exports = { Artifact, artifactSchema };
