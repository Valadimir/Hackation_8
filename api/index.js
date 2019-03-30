//import
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

//create connection
var con = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "example" ,
  port: 3306,
  database: "sampledatabase"


});



//get user
app.get('/test',function (req,res) {

  //data is send back to frond end

  fs.readFile(__dirname+"/"+"user.json",'utf8',function (err,data){

    console.log(data);
    res.end(data);


  });


});



// add user to database

app.post('/addUser',function (req,res) {
  //data is send from frontend


/*
  fs.readFile(__dirname+"/"+"user.json",'utf8',function (err,data){
    var users = JSON.parse(data);//convert obj to json
    var user = users["user"+req.params.id]//json use
    console.log(user);
    res.end(JSON.stringify(user));
    */

    /*
    user = {

      "name": req.body.name,
      "surname": req.body.surname,
      "idPWD": req.body.idpwd,
      "citizenID": req.body.ctz,
      "typeOfPWD": req.body.type,
      "password": req.body.pass,
      "province": req.body.pro,
      "numHome": req.body.num,
      "road": req.body.ro,
      "postcode": req.body.po,
      "district": req.body.di,
      "subdistrict": req.body.sub,
      "birth": req.body.bir,
      "gender": req.body.ge

    }
    */

    user = {

      "name": 'aaa',
      "surname": 'aaa',
      "idPWD": '123',
      "citizenID": '123',
      "typeOfPWD": 'bbb',
      "password": '123',
      "province": 'ppp',
      "numHome": '3/2',
      "road": 'aaa',
      "postcode": 123,
      "district": req.body.di,
      "subdistrict": req.body.sub,
      "birth": req.body.bir,
      "gender": req.body.ge

    }
  con.connect(function(error){

  if(error) throw error ;

  console.log("Connected!");



    // insert query
    sqlinsert = 'insert into users (name,surname,idPWD,citizenID,typeOfPWD,password,province,numHome,road,postcode,district,subdistrict,birth,gender) values ?';
    var values = [[n,s]];
    con.query(sqlinsert,[values], function(error,result){

      if (error) throw error;
      console.log("Insert complete by name : "+n+" surname: "+s);
    });







  });





})

app.listen(8000);
