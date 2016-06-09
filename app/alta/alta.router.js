function getStates() {
    return [{
        state:'login',
        config:{
            template: require('./alta.template.html'),
            url:'/alta',
            controller: 'AltaCtrl',
            controllerAs:"alta"
        }
    }];
}



function altaRun (routerHelper) {
    routerHelper.configureStates(getStates(),'alta');
}


module.exports=angular.module('alta',[]).run(['routerHelper',altaRun]);