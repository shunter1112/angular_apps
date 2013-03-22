var app = angular.module("MyAngularApp", []);
app.factory('Apps' , function(){
  var Hash = {};
  Hash.list = [
  {name: "picklr"}
  ];
  return Hash;
});