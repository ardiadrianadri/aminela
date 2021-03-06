function getStates() {
    return [{
        state:'menu',
        config:{
            template: require('./menu.template.html'),
            url:'/menu',
            abstract: true,
            controllerAs:'menuAbs',
            controller:'MenuCtrl'
        }
    }];
}



function MenuRun (routerHelper) {
    routerHelper.configureStates(getStates());
}



module.exports=angular.module('menu',[]).run(['routerHelper',MenuRun]);