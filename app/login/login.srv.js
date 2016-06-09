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
                var service = new ErrorManager();
                defer.reject(service.getCustomError(error));
            });

            return defer.promise;
        }
    }
    
    return loginClass;
}

module.exports=angular.module('login').factory('LoginSrv',['$http','$q','config','ErrorManager',loginSrvFactory]);
