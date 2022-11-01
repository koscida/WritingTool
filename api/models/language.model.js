const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Language = mongoose.model("Language", languageSchema);

module.exports = { Language, languageSchema };
