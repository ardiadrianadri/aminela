function loginSrvFactory ($http,$q,config,ErrorManager){

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
                
                var customError = new ErrorManager();

                defer.reject(customError.getCustomError);
                
            });

            return defer.promise;
        }
    }
    
    return loginClass;
}

module.exports=angular.module('login').factory('LoginSrv',['$http','$q','config','ErrorManager',loginSrvFactory]);