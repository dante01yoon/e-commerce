const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const config = require('../config');
const port = process.env.PORT || 5001; 
const mongoose = require('mongoose');
const { dummy } = require('./models/data')
var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

//parse request of content-type application/json
app.use(bodyParser.json());

//parse request of content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true})); 
//print request log on console 
app.use(morgan('dev'));
//set secret key variable for jwt
app.set('jwt-secret', config.secret);

//index page for testing 
app.get("/", (req,res) => {
  res.json({ message: "Welcome to S4 application server" });
});

app.get("/items",(req, res) => {
  return res.json(dummy);
});

// configure api router 
app.use('/api', require('../routes/api')); 
app.get('/test', require('../routes/api')); 
/* ====================
CONNECT TO MONGODB SERVER 
======================*/ 

mongoose.connect(config.mongodbUri); 
const db = mongoose.connection
db.on('error',console.error);
db.once('open', () => {
  console.log('connected to mongodb server'); 
});

//set port, listen for request 
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server is runningon port ${PORT}`);
}); 
