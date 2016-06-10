function Pass2Filter (config) {
    return function (pass, pass2) {
        return (pass===pass2)?
            false:
            config.msgError.differentPasswords;
    };
}

module.exports=angular.module('alta').filter('Pass2Filter',['config',Pass2Filter]);