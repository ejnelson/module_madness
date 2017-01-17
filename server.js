var http=require('http');
var one=require('./moduleone');
var two=require('./moduletwo');
var three=require('./modulethree');

http.createServer(function(req,res){
  res.writeHead(200); //200 means 'ok'

  
  res.write(three.balance());
  res.write(three.randomIntoMoney(100,1000000));


  res.end(); //ok to send response
}).listen(3000);
