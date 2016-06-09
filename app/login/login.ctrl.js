function LoginCtrl ($filter,LoginSrv,$state) {
    
    //ZONA DE DICICIONARIO
    var vm = this;
    vm.email = "";
    vm.password = "";
    vm.errorMsg = null;
    
    //FUNCIONES AUXILIARES
    
    //EVENTOS
    vm.loginAction = function () {
        var disable = $filter('PassFilter')(vm.password) || $filter('EmailFilter')(vm.email);
        var service = new LoginSrv();
        if (!disable) {
            service.doLogin(vm.email,vm.email).then(function (data) {
                console.log('Login con exito');
            }), function () {
                vm.errorMsg = error.usuario.msg;
            }
        }
        alert("Se ha pulsado el boton");
    }

    vm.clean = function () {
        vm.email = "";
        vm.password = "";
    }

    vm.alta = function () {
        $state.go('alta');
    }

    function startup () {
        
    }
    startup();
}

module.exports = angular.module('login').controller('LoginCtrl',['$filter',LoginCtrl]);