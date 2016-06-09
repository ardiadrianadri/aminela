function EmailFilter (config) {
    return function (email){
        return (config.validation.email.test(email))?
            false:
            config.msgError.invalidMail;
    };
}

module.exports=angular.module('alta').filter('EmailFilter',['config',EmailFilter]);