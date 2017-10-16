const app = angular.module('ts', []);


app.controller('mainController', ['$http', function($http){
	let controller = this;
		this.message;
  		// server location
  		this.url = 'https://transcendingcare-api.herokuapp.com';
  		// users
		this.user = {};
		this.userLog = {};
		this.showRegister = false;
  		this.showLogin = false;
  		this.loggedin = false;

		// create new account
		this.register = function(userReg){
		    $http({
		      method: 'POST',
		      url: this.url + '/users',
		      data: { user: {
		        username: userReg.username,
		        password: userReg.password
		      }}
		    }).then(function(response) {
		      console.log(response);
		      controller.message = "Success!";
		    })
		  }

		// login 
		this.login = function(userPass) {
	    	$http({
		    	method: 'POST',
		    	url: this.url + '/users/login',
		    	data: { user: { username: userPass.username, password: userPass.password }}
		    }).then(function(response) {
		      	console.log(response);
		     	this.user = response.data.user;
		     	localStorage.setItem('token', JSON.stringify(response.data.token));
		     	this.showLogin = false;
      			this.showRegister = false;
      			this.loggedin = true;
    		}.bind(this));
    	}

	  	// logout
		this.logout = function() {
		  localStorage.clear('token');
		  this.loggedin = false;
		  location.reload();
		}


				// display/hide user forms
		this.goRegister = function(){
		  	this.showRegister = true;
		    this.showLogin = false;
		}
		this.goLogin = function(){
		    this.showLogin = true;
		    this.showRegister = false;
		}
		this.registerForm = function(){
		    if(this.showRegister) {
		    }
		    else {
		      this.showRegister = !this.showRegister;
		    }
		}
		this.loginForm = function(){
		    if(this.showLogin){
		    }
		    else {
		      this.showLogin = !this.showLogin;
		    }
		}
  
}])
