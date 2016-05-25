function PasswordFilter (config) {
    return function (password){
        return (config.validation.password.test(password))?
            false:
            config.msgError.invalidPassword;
    };
}

module.exports=angular.module('login').filter('PasswordFilter',['config',PasswordFilter]);