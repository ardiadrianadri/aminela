function getStates() {
    return [{
        state:'login',
        config:{
            template: require('./login.template.html'),
            url:'/login',
            controller: 'LoginCtrl',
            controllerAs:"login"
        }
    }];
}



function loginRun (routerHelper) {
    routerHelper.configureStates(getStates(),'login');
}

<<<<<<< HEAD
=======


>>>>>>> 068108f5581ae1a5ab7d417d1ea0c18303bed593
module.exports=angular.module('login',[]).run(['routerHelper',loginRun]);