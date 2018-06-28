let express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),    
    mongoose   = require("mongoose"),
    Mover      = require("./models/movers.js");

mongoose.connect("mongodb://localhost/movers");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))

// Mover.create({
// 		name: "John",
// 		phoneNumber: "5555555"
// 	}, function(err, mover){
// 	if(err){
// 		console.log(err);
// 	}else {
// 		console.log("Added a new mover:");
// 		console.log(mover);
// 	}
// });

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
	Mover.find({}, function(err, movers) {
		if(err) {
			console.log(err);
		} else {
			res.render("index", {movers: movers});
		}
	});
});

app.get("/movers", function(req, res) {
	Mover.find({}, function(err, movers) {
		if(err) {
			console.log(err);
		} else {
			res.render("movers", {movers: movers});
		}
	});
});

app.get("/movers/new", function(req, res){
	res.render("newMovers");
});

app.post("/movers", function(req, res) {
	let name = req.body.name;
	let phoneNumber = req.body.phoneNumber;
	let newMover = {name: name, phoneNumber: phoneNumber};
	//CREATE A NEW MOVER AND SAVE IT TO THE DB
	Mover.create(newMover, function(err, newMover){
		if (err) {
			console.log(err);
		} else {
			Mover.find({}, function(err, movers) {
				if(err) {
					console.log(err);
				} else {
					res.render("movers", {movers: movers});
				}
			});
		};
	});
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




// mongoose.connect("mongodb://localhost/help");   WILL BE UTILIZED IN THE FUTURE WITH ANOTHER MONGOOSE INSTANCE
//HELP SCHEMA SETUP
// let helpSchema = new mongoose.Schema({
// 	name: String,
// 	phoneNumber: String,
// 	item: String,
// 	from: String,
// 	to: String,
// 	when: String
// });

// let Help = mongoose.model("Help", helpSchema);

// Help.create({
// 		name: "Marie",
// 		phoneNumber: "1593570",
// 		item: "Closet",
// 		from: "Jerusalem",
// 		to: "Jerusalem",
// 		when: "1.1.19"
// 	}, function(err, help){
// 	if(err){
// 		console.log(err);
// 	}else {
// 		console.log("Added a new help wanted:");
// 		console.log(help);
// 	}
// });