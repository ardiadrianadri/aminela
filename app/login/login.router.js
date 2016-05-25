function getStates() {
    return [{
        state:'login',
        config:{
            template: require('./login.template.html'),
            url:'/login',
            controllerAs:"login"
        }
    }];
}

function loginRun (routerHelper) {
    routerHelper.configureStates(getStates(),'login');
}

module.exports=angular.module('login',[]).run(['routerHelper',loginRun]);