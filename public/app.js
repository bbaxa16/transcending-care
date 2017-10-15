const app = angular.module('ts', []);


app.controller('mainController', ['$http', function($http){
	let controller = this;
		this.message;
  		// server location
  		this.url = 'https://transcendingcare-api.herokuapp.com';
  		// users
		this.user = {};
		this.userLog = {};
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
      			this.getScores(this.user);
    		}.bind(this));
    	}

	  	// logout
		this.logout = function() {
		  localStorage.clear('token');
		  this.loggedin = false;
		  location.reload();
		}
  
}])
