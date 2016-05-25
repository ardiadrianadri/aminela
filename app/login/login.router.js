
function

function loginRun (routerHelper){
	routerHelper.configureStates(getStates(),'login');
}



module.exports=angular.module('login',[]).run(['routerHelper',loginRun]);