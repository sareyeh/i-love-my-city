var express = require("express");
var app = express();
var handlers = require("./routes/routes.js");

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get("/", handlers.homeFn);
app.get("/:city", handlers.cityFn);

var port = process.env.PORT || 8080;

var server = app.listen(port,function(req, res){
    console.log("server is listening on port:" + port);
});