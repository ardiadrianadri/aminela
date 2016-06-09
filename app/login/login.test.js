

describe('Test del modulo login', function () {
	
   beforeEach(window.module('app'));
    
    describe('Tests del filtro de email',function () {
        var EmailFilter, config;
        
        beforeEach(inject(function (EmailFilterFilter, _config_) {
            EmailFilter = EmailFilterFilter;
            config = _config_;
        }));
        
        it('Test OK: El mail del filtro esta bien formado',function () {
            var mail = 'pepe@mail.com';
            
            expect(EmailFilter(mail)).toBe(false);
        });
        
        it('Test KO: El mail del filtro esta mal formado', function () {
            var mail = 'pepe.com';
            
            expect(EmailFilter(mail)).toBe(config.msgError.invalidMail);
        });
        
    });
    describe('Tests del filtro de pass',function () {
    	var PassFilter, config;

    	beforeEach(inject(function (PassFilterFilter, _config_) {
    	PassFilter = PassFilterFilter;
    	config = _config_;
    	}));

    	it('Test OK: El pass del filtro esta bien formado',function () {
    	var pass = '1234aa##';

    	expect(PassFilter(pass)).toBe(false);
    	});

    	it('Test KO: El pass del filtro esta mal formado', function () {
    	var pass = 'a';

    	expect(PassFilter(pass)).toBe(config.msgError.invalidPass);
    	});

    });

    describe('Test del servicio de login',function () {
        var $httpBackend, LoginSrv, config;

        beforeEach(inject(function (_$httpBackend_, _LoginSrv_, _config_) {
            $httpBackend = _$httpBackend_;
            LoginSrv = _LoginSrv_;
            config = _config_;
        }));

        it('Test OK: Probemos que obtenemos los datos correctos si el login es un exito',function () {
            var logingData ={
                email:'pepe@email.com',
                password:'12345'
            };
            
            var servConfig = config.backService.loginConf;
            var service = new LoginSrv();
                
            $httpBackend.expect(servConfig.method, servConfig.url, logingData).respond(function () {
                return [200,{data:'OK'},{}];
            });

            service.doLogin(logingData.email, logingData.password).
            then(function (result) {
                expect(result.data).toBe('OK');
            }, function (error) {
                expect(false).toBe(true);
            });
            
            $httpBackend.flush();
        });

        it('Test KO: Prueba del error 404',function () {
            var logingData ={
                email:'pepe@email.com',
                password:'12345'
            };
            
            
            var servConfig = config.backService.loginConf;
            var errorConfig = config.serviceError;
            var service = new LoginSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, logingData).respond(function () {
                return [404,{},{}];
            });

            service.doLogin(logingData.email, logingData.password).
            then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['404']);
            });

            $httpBackend.flush();
        });

        it('Test KO: Prueba del error 401',function () {
            var logingData ={
                email:'pepe@email.com',
                password:'12345'
            };


            var servConfig = config.backService.loginConf;
            var errorConfig = config.serviceError;
            var service = new LoginSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, logingData).respond(function () {
                return [401,{},{}];
            });

            service.doLogin(logingData.email, logingData.password).
            then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['401']);
            });

            $httpBackend.flush();
        });

        it('Test KO: Prueba del error 403',function () {
            var logingData ={
                email:'pepe@email.com',
                password:'12345'
            };


            var servConfig = config.backService.loginConf;
            var errorConfig = config.serviceError;
            var service = new LoginSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, logingData).respond(function () {
                return [403,{},{}];
            });

            service.doLogin(logingData.email, logingData.password).
            then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['403']);
            });

            $httpBackend.flush();
        });

        it('Test KO: Prueba del error 500',function () {
            var logingData ={
                email:'pepe@email.com',
                password:'12345'
            };


            var servConfig = config.backService.loginConf;
            var errorConfig = config.serviceError;
            var service = new LoginSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, logingData).respond(function () {
                return [500,{},{}];
            });

            service.doLogin(logingData.email, logingData.password).
            then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['500']);
            });

            $httpBackend.flush();
        });

        it('Test KO: Prueba del error 500',function () {
            var logingData ={
                email:'pepe@email.com',
                password:'12345'
            };


            var servConfig = config.backService.loginConf;
            var errorConfig = config.serviceError;
            var service = new LoginSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, logingData).respond(function () {
                return [500,{},{}];
            });

            service.doLogin(logingData.email, logingData.password).
            then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig.default);
            });

            $httpBackend.flush();
        });
    });

    describe('Test del controlador de login', function () {
        var controlador, $httpBackend, config;
        beforeEach(inject(function ($controller, $filter, LoginSrv, $state, _$httpBackend_, _config_) {
            controlador = function () {
                $httpBackend = _$httpBackend_;
                config = _config_;
                return $controller('LoginCtrl',{
                    '$filter':$filter,
                    'LoginSrv':LoginSrv,
                    '$state':$state
                });
            }
        }));

        it('Test OK: Comprobemos que nuestro controlador tiene declardas las variables y eventos', function () {
            var ctrl = controlador();

            expect(ctrl.email).toBeDefined();
            expect(ctrl.password).toBeDefined();
            expect(ctrl.errorMsg).toBeDefined();
            expect(ctrl.loginAction).toBeDefined();
            expect(ctrl.clean).toBeDefined();
            expect(ctrl.alta).toBeDefined();
        });

        it('Test KO: Comprobemos si el mail y el password no son validos no se llama al servicio', function () {
            var ctrl = controlador();

            ctrl.email = "";
            ctrl.password = "";

            var loginData = {
                email: ctrl.email,
                password: ctrl.password
            };

            var configServ = config.backService.loginConf;

            $httpBackend.expect(configServ.method, configServ.url, loginData).respond(function () {
                return [200,{},{}];
            });

            try {
                ctr.loginAction();
                $httpBackend.flush();
                expect(true).toBe(false);
            }catch (e) {
                expect(true).toBe(true);
            }
        });

        it('Test KO: Actualizamos el mensaje de error', function () {
            var ctrl = controlador();

            ctrl.email = "pepe@mail.com";
            ctrl.password = "123123";

            var loginData = {
                email: ctrl.email,
                password: ctrl.password
            };

            var configServ = config.backService.loginConf;
            var configError = config.serviceError;

            $httpBackend.expect(configServ.method, configServ.url, loginData).respond(function () {
                return [404,{},{}];
            });

            try {
                ctr.loginAction();
                $httpBackend.flush();
                expect(ctrl.errorMsg).toBe(configError['404']);
            }catch (e) {
                expect(true).toBe(false);
            }
        });

        it('Test OK: Probemos que el clean limpua el email y el password', function () {
            var ctrl = controlador();

            ctrl.email = "pepe@mail.com";
            ctrl.password = "123123";
            
            ctrl.clean();
            
            expect(ctrl.email).toBe("");
            expect(ctrl.password).toBe("");
        });
    });
});