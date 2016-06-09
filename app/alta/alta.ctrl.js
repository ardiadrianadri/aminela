function AltaCtrl($filter,AltaSrv,$state) {

    //ZONA DE DICCIONARIO
    var vm = this;
    vm.errorMsg = null;

    vm.email = "";
    vm.password = "";

    //FUNCIONES AUXILIARES

    //EVENTOS

    vm.altaAction = function () {
        var disable = ($filter('PassFilter')(vm.password)) || ($filter('EmailFilter')(vm.email));
        var service = new AltaSrv();
        
        if (!disable) {
            service.doLogin(vm.email, vm.password).then(function(data){
               console.log('Alta con exito'); 
            },function (error) {
                vm.errorMsg = error.usuario.msg;
            });
        }
    };

    vm.clean = function () {
        vm.email="";
        vm.password="";
    };
    
    vm.alta = function () {
        $state.go('alta');
    };
}

module.exports = angular.module('alta').controller('AltaCtrl', ['$filter','AltaSrv','$state','alta', AltaCtrl]);