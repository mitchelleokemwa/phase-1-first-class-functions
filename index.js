//Code your solution in this file
function receivesAFunction(callback){
  callback();
}
function returnsANamedFunction(){
  function collectionOfTshirts(){}
  return collectionOfTshirts
}
function returnsAnAnonymousFunction(){
  return function(){}
}
