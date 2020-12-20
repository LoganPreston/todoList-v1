//express, bodyparser installed with npm, date from date.js
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

//express, bodyparser, ejs setup
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//Arrays for new items, const because only append to, don't change ref
const items = ["Buy Food", "Cook Food", "Eat Food"]; 
const workItems = [];

//get root. Pull today's date and display list for today
app.get("/", function (req, res) {
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

//Work list, no date needed.
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

//About, separate from either list
app.get("/about", function (req, res) {
  res.render("about");
});

//On post to root, from add button, determine to go to list or worklist.
app.post("/", function (req, res) {
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

//Listen on port 3000. If upload to real host (like heroku), will change port and won't need log.
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
