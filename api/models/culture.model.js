const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cultureSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Culture = mongoose.model("Culture", cultureSchema);

module.exports = { Culture, cultureSchema };
