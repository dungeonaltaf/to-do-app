var express = require('express');
var cors = require('cors');
var bodyparser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
var path = require('path');


mongoose.connect('mongodb://localhost:27017/MEAN', { useNewUrlParser: true }).
  catch(error => handleError(error));

// Or:
try {
   mongoose.connect('mongodb://localhost:27017/MEAN', { useNewUrlParser: true });
} catch (error) {
  handleError(error);
}


mongoose.connection.on('connected',function(){
    console.log("Connection successful to mongdb");
});
mongoose.connection.on('error',function(err){
      console.log(err);
    
});

const port  = 3000;
const route = require('./routes/route');
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api',route);
app.get('/', function(req,res){
    res.send("foobar");
});


app.listen(port, function(){
    console.log("Server connected to port:"+port);
});