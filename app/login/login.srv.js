function loginSrvFactory ($http,$q,config){

    function loginClass () {
        this.doLogin = function (email, psswd) {
            var defer = $q.defer();
            var serviceConfig = config.backService.loginConf;
            
            serviceConfig.data={
                email:email,
                password:psswd
            };

            $http(serviceConfig).then(function (result) {
                defer.resolve(result.data);
            }, function (error) {
                console.log(JSON.stringify(error));
            });

            return defer.promise;
        }
    }
    
    return loginClass;
}

module.exports=angular.module('login').factory('LoginSrv',['$http','$q','config',loginSrvFactory]);