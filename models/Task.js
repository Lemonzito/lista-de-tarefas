const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	task: {
		type: String,
		requiere: true,
	},
	check: {
		type: Boolean,
		default: false,
	},
	date: {
		type: Date,
		default: Data.now(),
	},
});

module.exports = mongoose.model("Task", taskSchema);