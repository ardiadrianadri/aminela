function Pass2Filter (config) {
    return function (pass, pass2) {
        return (config.validation.pass.test(pass))?
            (pass===pass2)?
                false:
                config.msgError.differentPasswords:
        config.msgError.invalidPass;
    };
}

module.exports=angular.module('alta').filter('Pass2Filter',['config',Pass2Filter]);