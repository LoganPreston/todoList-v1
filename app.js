const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.send("Hello");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
})