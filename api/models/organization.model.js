const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
	_id: Number,
	_project_id: Number,
	name: { type: String, required: true },
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = { Organization, organizationSchema };
