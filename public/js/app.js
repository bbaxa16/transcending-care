const app = angular.module('transCare', [])
  angular.module('app', ['ngSanitize'])

app.controller('mainController', ['$http', '$scope', function($http, $scope){
  this.loginDisplay = false;
  this.registerDisplay = true;
  this.toggleLogin = function(){
    this.loginDisplay = !this.loginDisplay;
  }
  this.toggleRegister = function(){
    this.registerDisplay = !this.registerDisplay;
  }
  this.toggleForms = function(){
    this.loginDisplay = !this.loginDisplay;
    this.registerDisplay = !this.registerDisplay;
  }
}])
