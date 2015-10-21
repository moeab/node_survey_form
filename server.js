var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views' ,path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
})

app.post('/result', function(req, res){
	var survey = req.body;
	res.render('result', {survey_info: survey});
})

app.listen(8000, function(){
	console.log('listening on port 8000');
})