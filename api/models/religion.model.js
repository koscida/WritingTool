const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const religionSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Religion = mongoose.model("Religion", religionSchema);

module.exports = { Religion, religionSchema };
