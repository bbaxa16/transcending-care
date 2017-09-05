const app = angular.module('transCare', [])
  angular.module('app', ['ngSanitize'])

app.controller('mainController', ['$http', '$scope', function($http, $scope){
  this.loginDisplay = false;
  this.registerDisplay = true;
  this.toggleLogin = function(){
    this.loginDisplay = !this.loginDisplay;
  }
  this.goToRegister = function(){
    this.registerDisplay = true;
    this.loginDisplay = false;
  }
  this.goToLogin = function(){
    this.registerDisplay = false;
    this.loginDisplay = true;
  }
  this.toggleForms = function(){
    this.loginDisplay = !this.loginDisplay;
    this.registerDisplay = !this.registerDisplay;
  }
}])
