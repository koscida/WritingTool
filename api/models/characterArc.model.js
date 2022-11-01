const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterArcSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const CharacterArc = mongoose.model("CharacterArc", characterArcSchema);

module.exports = { CharacterArc, characterArcSchema };
