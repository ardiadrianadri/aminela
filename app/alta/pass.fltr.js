function PassFilter (config) {
    return function (pass){
        return (config.validation.pass.test(pass))?
            false:
            config.msgError.invalidPass;
    };
}

module.exports=angular.module('alta').filter('PassFilter',['config',PassFilter]);
