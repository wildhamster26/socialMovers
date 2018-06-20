var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/movers", function(req, res) {

	let movers = [
	{name: "Dan",
	 phoneNumber: "05451234567"},
	 {name: "Marie",
	 phoneNumber: "05451234567"},
	 {name: "Jack",
	 phoneNumber: "05451234567"}
	];

	res.render("movers", {movers: movers});
});

app.post("/movers", function(req, res) {
	res.send("You've hit the movers post route");
});

app.get("/help", function(req, res) {

	let socialWorkers = [
	{name: "Jenny",
	 phoneNumber: "05451234567",
	 item: "closet",
	 from: "Metropolis",
	 to: "Gotham",
	 when: "Next week"},
	 {name: "Arthur",
	 phoneNumber: "05451234567",
	 item: "bed",
	 from: "Metropolis",
	 to: "Gotham",
	 when: "Next month"},
	 {name: "Jill",
	 phoneNumber: "05451234567",
	 item: "dinner table",
	 from: "Metropolis",
	 to: "Gotham",
	 when: "ASAP"}
	];

	res.render("help", {socialWorkers: socialWorkers});
});

app.post("/help", function(req, res) {
	res.send("You've hit the help wanted post route");
});


app.listen(3000, function() {
	console.log("Online");
});