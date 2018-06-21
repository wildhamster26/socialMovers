var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

let movers = [
	{name: "Dan",
	 phoneNumber: "05451234567"},
	 {name: "Marie",
	 phoneNumber: "05451234567"},
	 {name: "Jack",
	 phoneNumber: "05451234567"},
	 {name: "Dan",
	 phoneNumber: "05451234567"},
	 {name: "Marie",
	 phoneNumber: "05451234567"},
	 {name: "Jack",
	 phoneNumber: "05451234567"},
	 {name: "Dan",
	 phoneNumber: "05451234567"},
	 {name: "Marie",
	 phoneNumber: "05451234567"},
	 {name: "Jack",
	 phoneNumber: "05451234567"},
	 {name: "Dan",
	 phoneNumber: "05451234567"},
	 {name: "Marie",
	 phoneNumber: "05451234567"},
	 {name: "Jack",
	 phoneNumber: "05451234567"}
	];

let helpers = [
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

app.get("/", function(req, res) {
	res.render("home", {movers: movers});
});

app.get("/movers", function(req, res) {
	res.render("movers", {movers: movers});
});

app.get("/movers/new", function(req, res){
	res.render("newMovers");
});

app.post("/movers", function(req, res) {
	let name = req.body.name;
	let phoneNumber = req.body.phoneNumber;
	let newMover = {name: name, phoneNumber: phoneNumber};
	movers.push(newMover);

	res.render("movers", {movers: movers});
});

app.get("/help", function(req, res) {
	res.render("help", {helpers: helpers});
});

app.get("/help/new", function(req, res){
	res.render("newHelp");
});

app.post("/help", function(req, res) {
	let name = req.body.name;
	let phoneNumber = req.body.phoneNumber;
	let item = req.body.item;
	let from = req.body.from;
	let to = req.body.to;
	let when = req.body.when;
	let newHelp = {name: name, phoneNumber: phoneNumber, item: item, from: from, to: to, when: when};
	helpers.push(newHelp);

	res.render("help", {helpers: helpers});
});


app.listen(3000, function() {
	console.log("Online");
});