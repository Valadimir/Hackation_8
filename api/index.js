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
  port: 4005,
  database: "sampledatabase"


});

console.log("Server is open ");



//get user
app.get('/test',function (req,res) {

  //data is send back to frond end

  fs.readFile(__dirname+"/"+"user.json",'utf8',function (err,data){

    console.log(data);
    res.end(data);


  });


});

// add user to database
app.get('/addUser',function (req,res) {
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

    var user = {

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
      "district": 'a',
      "subdistrict": 'a',
      "birth": 'a',
      "gender": 's'

    }

    var n = user["name"];
    var s = user["surname"];
    var idp = user["idPWD"];
    var ct = user['citizenID'];
    var tp = user['typeOfPWD'];
    var p = user['password'];
    var pr = user['province'];
    var nu = user['numHome'];
    var r = user['road'];
    var ps = user['postcode'];
    var d = user['district'];
    var su = user['subdistrict'];
    var b = user['birth'];
    var g = user['geder'];
  con.connect(function(error){

  if(error) throw error ;

  console.log("Connected db");
    // insert query
    sqlinsert = 'insert into users (name,surname,idPWD,citizenID,typeOfPWD,password,province,numHome,road,postcode,district,subdistrict,birth,gender) values ?';
    var values = [[n,s,idp,ct,tp,p,pr,nu,r,ps,d,su,b,g]];
    con.query(sqlinsert,[values], function(error,result){

      if (error) throw error;
      console.log("Insert complete by name : "+n+" surname: "+s);
    });


    res.end("Insert complete");
  });
});

//select all
app.get('/selectAll',function (req,res) {



  con.connect(function(error){
    if (error) throw error;
    console.log("Connect db");

    sqlselect = 'select * from users';
    con.query(sqlselect,function(error,result){

      if (error) throw error;

      console.log(result);
      res.send(result);
    });

  });




});



app.listen(8000);
