const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manuscriptSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Manuscript = mongoose.model("Manuscript", manuscriptSchema);

module.exports = { Manuscript, manuscriptSchema };
