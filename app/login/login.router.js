function getStates() {
    return [{
        state:'login',
        config:{
            template: require('./login.template.html'),
            url:'/login'
        }
    }];
}

function loginRun (routerHelper) {
    //comentario tonto
    routerHelper.configureStates(getStates(),'login');
}

module.exports=angular.module('login',[]).run(['routerHelper',loginRun]);