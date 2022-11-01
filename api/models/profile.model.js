const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
	_id: Number,
	name: { type: String, required: true },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = { Profile, profileSchema };
