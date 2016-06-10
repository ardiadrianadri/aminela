function AltaCtrl($filter,AltaSrv,$state) {

    //ZONA DE DICCIONARIO
    var vm = this;
    vm.errorMsg = null;

    vm.email = "";
    vm.password = "";
    vm.password2 = "";

    //FUNCIONES AUXILIARES

    //EVENTOS
    vm.altaAction = function () {
        var disable = ($filter('PassFilter')(vm.password)) || ($filter('Pass2Filter')(vm.password, vm.password2)) || ($filter('EmailFilter')(vm.email));
        var service = new AltaSrv();
        
        if (!disable) {
            service.checkData(vm.email, vm.password, vm.password2).then(function(data){
               console.log('Alta con exito');
            }, function (error) {
                vm.errorMsg = error.usuario.msg;
            });
        }
    };

    vm.clean = function () {
        vm.email = "";
        vm.password = "";
        vm.password2 = "";
    };
    
    vm.alta = function () {
        $state.go('alta');
    };
}

module.exports = angular.module('alta').controller('AltaCtrl', ['$filter','AltaSrv','$state', AltaCtrl]);