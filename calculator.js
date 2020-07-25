//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//urlencoded is for parsing form data
app.use(bodyParser.urlencoded({extended: true}));

//sendFile to send a html file as response
//__dirname is dynamic directory path
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;
  res.send("The result is: "+result);
});

app.get("/bmicalculator", function (req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var num1 = Number(req.body.weight);
  var num2 = Number(req.body.height);
  var result = num1/(num2*num2);
  res.send("The BMI is: "+Math.round(result));
});

app.listen("3000", function(){
  console.log("Server is running on port 3000");
});
