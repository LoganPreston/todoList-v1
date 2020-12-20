const express = require("express");
const bodyParser = require("body-parser");
//const ejs = require("ejs");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//daysOfWeek=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

app.get("/", function (req, res) {
  var today = new Date();
  var options={
      weekday:"long",
      day:"numeric",
      month:"long"
  };
  var day = today.toLocaleDateString("en-US",options); //daysOfWeek[today.getDay()];
  /*
  if (today.getDay() === 6 || today.getDay() === 0) {
    day = "Weekend";
    //res.send("Yay it's the weekend!");
  } else {
    day = "Weekday";
    //res.write("<p>Nay it's the work week!</p>");
    //res.write("<h1>another line</h1>")
    //res.sendFile(__dirname+"/index.html");
  }
  */
  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
