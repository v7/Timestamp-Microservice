var express = require('express')
var moment = require('moment');
moment().format();
var app = express()
app.set('view engine','ejs')

app.get('/',function(req,res){

  res.render('index')

})

app.get('/:time',function(req,res){

  var time = req.params.time;

    if (moment(time, "X", true).isValid()){

        res.json({unix:Number(time),natural:moment.unix(time).format("MMMM DD,Y")})


    }else if(moment(time, "MMMM DD,Y", true).isValid()){
            var unixTime = moment.utc(time,"MMMM DD,Y").unix("X");

        res.json({unix:unixTime,natural:time})


    }else{

      res.json({unix:null,natural:null})

    }

})



app.listen(3000,function(err){

  if(err){

    throw err
  }else{
    console.log("server up")
  }

})
