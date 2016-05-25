function LoginCtrl (){
    
    this.email="";
    this.password="";
}

module.exports = angular.module('login').controller('LoginCtrl',LoginCtrl);