const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
	_id: Number,
	_profile_id: Number,
	name: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project, projectSchema };
