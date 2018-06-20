var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/movers", function(req, res) {

	let movers = [
	{name: "Dan",
	 phoneNumber: "05451234567"},
	 {name: "Hugh",
	 phoneNumber: "05451234567"},
	 {name: "Jack",
	 phoneNumber: "05451234567"}
	];

	res.render("movers", {movers: movers});
});


app.listen(3000, function() {
	console.log("Online");
});