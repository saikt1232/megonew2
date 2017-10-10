wrapper on javascript --> two way data binding, fast development, elminating lot of sphegeti code, testing is very easy



Model --> it is the place where you put your data --> scope --> $scope.name  $scope.data / $scope.response
view -> what you can see -- it need not be html
controller --> controller orchestrates the data from the model and view

------

DI - Dependency Injections

----
SPA

-----

Modules --> namespace 

angular.module('mainModule',['ui.bootstrap','childModule1','childModule1']);
angular.module('childModule1',[]);
angular.module('childModule2',[]);

------

Controllers 

angular.module('name'[])
.controller('ctrlname', myfun);


var myfun = function($scope){
 $scope.items = [{
    name: 'Scuba Diving Kit',
    id: 7297510
  },{
    name: 'Snorkel',
    id: 0278916
  },{
    name: 'Wet Suit',
    id: 2389017
  },{
    name: 'Beach Towel',
    id: 1000983
  }];
};

------

Services - some functions which when we do 'new' on it will give us objects 

  function sai(){
      return {
          // I am here hello      --> new sai() = {// I am here hello  } ---> $scope
      }
  }



-----

Directives












