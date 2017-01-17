var includeone=require('./moduleone');
var includetwo=require('./moduletwo');




exports.balance=function(){
  return 'Account Balance: \n';
};


exports.randomIntoMoney=function(a,b){
  var one=includeone(a,b);
  var two=includetwo(one);
  return two;
};
