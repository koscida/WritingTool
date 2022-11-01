const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plotSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Plot = mongoose.model("Plot", plotSchema);

module.exports = { Plot, plotSchema };
