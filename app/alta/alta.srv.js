function altaSrvFactory ($http,$q,config,ErrorManager){

    function altaClass () {
        this.checkData = function (email, psswd, psswd2) {
            var defer = $q.defer();
            var serviceConfig = config.backService.altaConf;
            
            serviceConfig.data={
                email:email,
                password:psswd,
                password2:psswd2
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
    
    return altaClass;
}

module.exports=angular.module('alta').factory('AltaSrv',['$http','$q','config','ErrorManager',altaSrvFactory]);