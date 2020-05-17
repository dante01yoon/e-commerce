const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db= require("../app/models");
const Role = db.role;

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

//parse request of content-type application/json
app.use(bodyParser.json());

//parse request of content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", (req,res) => {
  res.json({ message: "Welcome to S4 application server" });
});

db.mongoose 
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch( err => {
    console.error("connection error", err);
    process.exit();
  } )
function initial(){
  Role.estimatedDocumentCount((err, count) => {
    if(!err && count === 0 ){
      new Role({
        name: "user"
      }).save(err => {
        if(err){
          console.log("error", err); 
        }
        
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator" 
      }).save(err => {
        if(err){
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        err && console.log("error",err); 
        console.log("added 'admin' to roles collection");
      })

    }
  }); 
}
//set port, listen for request 
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server is runningon port ${PORT}`);
}); 
