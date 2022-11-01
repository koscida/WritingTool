const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const magicSystemSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const MagicSystem = mongoose.model("MagicSystem", magicSystemSchema);

module.exports = { MagicSystem, magicSystemSchema };
