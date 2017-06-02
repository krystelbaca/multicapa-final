/**
 * Created by krystelbaca on 6/1/17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT||8080;

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));

app.set('view options', {layout:false});
app.use('/public', express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/views'));


app.get("/blog", function (req, response) {
     response.render("blog.ejs");
});

app.get("/oaxaca", function (req, response) {
    response.render("oaxaca.ejs");
});

app.listen(port, function(){
    console.log("Escuchando en el puerto " + port);
});