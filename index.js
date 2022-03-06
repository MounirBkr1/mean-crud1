//pour express
const express = require('express')
const app = express()
//connectto mongodb
const mongoose=require('mongoose')
//import config file
const config=require('./config/database');
const path=require('path');


mongoose.Promise= global.Promise;
mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('****could not connect to db****',err);
    }else{
        //console.log(config.secret);
        console.log('****connected to db****',config.db)
    }
});

//send index.html file
app.use(express.static(__dirname+'/client/dist'));

app.get('/*',(req, res)=> {
    res.sendFile(path.join(__dirname+'/client/dist/client/index.html'));
  });
  
  //http://localhost:8080
  app.listen(8080,()=>{
      console.log('Listening on port 8080')
  })
