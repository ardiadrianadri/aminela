function errorManager(config) {
    
    function ErrorClass () {
        this.getCustomError = function(error){
            var mensaje = (config.serviceError[error.status])?
                config.serviceError[error.status]:
                config.serviceError.default;
            
            error.usuario={
                msg:mensaje
            }
            
            return error;
        }
    }
    
    return ErrorClass;
}

module.exports=angular.module('common').factory('ErrorManager',['config',errorManager]);