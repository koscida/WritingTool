const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { characterSchema } = require("./character.model.js");

const projectSchema = new Schema({
	_id: Number,
	name: { type: String, required: true },
	characters: { type: [characterSchema] },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project, projectSchema };
