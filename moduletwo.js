var usd=function(money){
return money.toLocaleString('USD', {
  style: 'currency',
  currency: "USD",
  minimumFractionDigits : 2,
  maximumFractionDigits : 2
  }) ;
}
module.exports=usd;
