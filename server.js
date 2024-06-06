var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main/index.html'));
});

router.get('/acessories',function(req,res){
  res.sendFile(path.join(__dirname+'/acessories/index.html'));
});

router.get('/sups',function(req,res){
  res.sendFile(path.join(__dirname+'/sups/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.listen(process.env.port || 8084);
console.log('Сервер стартовал!');
console.log(__dirname);

