let mongoose = require("mongoose");

//MOVER SCHEMA SETUP
let moverSchema = new mongoose.Schema({
	name: String,
	phoneNumber: String
});

module.exports = mongoose.model("Mover", moverSchema);

