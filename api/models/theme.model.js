const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const themeSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Theme = mongoose.model("Theme", themeSchema);

module.exports = { Theme, themeSchema };
