function PassFilter (config) {
    return function (pass, pass2){
        return (config.validation.pass.test(pass))?
            (pass2)?
                (pass===pass2)?
                    false:
                    config.msgError.differentPasswords:
                false:
            config.msgError.invalidPass;
    };
}

module.exports=angular.module('alta').filter('PassFilter',['config',PassFilter]);
