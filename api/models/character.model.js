const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Character = mongoose.model("Character", characterSchema);

module.exports = { Character, characterSchema };
