var express = require('express'),
app = express(),
mysql = require('mysql'),
session = require('client-sessions'),
MobileDetect = require('mobile-detect'),
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kervingames',
  multipleStatements: true
});
conn.connect();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.get('*', (req, res) => {
  var md = new MobileDetect(req.headers['user-agent']);
  if(md.tablet() !== null){
    res.render('tablet');
  }else if(md.phone() !== null){
    res.render('phone');
  }else{
    res.render('desktop');
  }
});

app.post('/getAccount', (req, res) => {
  try{
    if(req.session.username !== 'undefined'){
      //Something
    }
  }catch(e){
    res.send({username: 'Sign-In'});
  }
});

app.listen('80', () => {
  console.log('port 80');
});
