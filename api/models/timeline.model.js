const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timelineSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Timeline = mongoose.model("Timeline", timelineSchema);

module.exports = { Timeline, timelineSchema };
