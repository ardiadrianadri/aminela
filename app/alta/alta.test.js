

describe('Test del modulo alta', function () {
	
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
    	var PassFilter, Pass2Filter, config;

    	beforeEach(inject(function (PassFilterFilter, Pass2FilterFilter, _config_) {
            PassFilter = PassFilterFilter;
            Pass2Filter = Pass2FilterFilter;
            config = _config_;
    	}));

        it('Test OK: El pass del filtro esta bien formado',function () {
            var pass = '1234aa##';

            expect(PassFilter(pass)).toBe(false);
        });

    	it('Test OK: Los pass del filtro estan bien formados y coinciden',function () {
            var pass = '1234aa##';
            var pass2 = '1234aa##';
            
            expect(Pass2Filter(pass, pass2)).toBe(false);
    	});

        it('Test KO: Los pass del filtro estan bien formados pero son distintos',function () {
            var pass = '1234aa##';
            var pass2 = '1235aa##';

            expect(Pass2Filter(pass, pass2)).toBe(config.msgError.differentPasswords);
        });

        it('Test KO: Los pass del filtro estan bien formados pero son distintos',function () {
            var pass = '1234aa##';
            var pass2 = '';

            expect(Pass2Filter(pass, pass2)).toBe(config.msgError.invalidPass);
        });

    	it('Test KO: El pass del filtro esta mal formado', function () {
            var pass = 'a';
            var pass2 = '';
            
    	expect(Pass2Filter(pass, pass2)).toBe(config.msgError.invalidPass);
    	});
    });

    describe('Test del servicio de alta',function () {
        var $httpBackend, AltaSrv, config;

        beforeEach(inject(function (_$httpBackend_, _AltaSrv_, _config_) {
            $httpBackend = _$httpBackend_;
            AltaSrv = _AltaSrv_;
            config = _config_;
        }));

        it('Test OK: Probemos que obtenemos los datos correctos si el alta es un exito',function () {
           var altaData ={
               email:'pepe@email.com',
               password:'12345'
           };

            var servConfig = config.backService.altaConf;
            var service = new AltaSrv();
                
            $httpBackend.expect(servConfig.method, servConfig.url, altagData).respond(function () {
                return [200,{data:'OK'},{}];
            });

            service.doAlta(altagData.email, altagData.password).
            then(function (result) {
                expect(result.data).toBe('OK');
            }, function (error) {
                expect(false).toBe(true);
            });
            
            $httpBackend.flush();
        });
        
        it ('Test KO: Probar error en caso de 404',function () {

                var laltaData = {
                    email:'pepe@email.com',
                    password:'12345'
                };

                var servConfig = config.backService.altaConf;
                var errorConfig = config.serviceError;
                var service = new AltaSrv();
                
                $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                    return [404,{},{}];
                });
                
                service.doAlta(laltaData.email, altaData.password).then(function (result) {
                   expect(false).toBe(true); 
                }, function (error) {
                    expect(error.usuario.msg).toBe(errorConfig['404']);
                });
        });

        it ('Test KO: Probar error en caso de 401',function () {
            var altaData ={
                email:'pepe@email.com',
                password:'12345'
            };

            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [401,{},{}];
            });

            service.doAlta(altaData.email, altaData.password).then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['401']);
            });
        });

        it ('Test KO: Probar error en caso de 403',function () {
            var altaData ={
                email:'pepe@email.com',
                password:'12345'
            };

            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [403,{},{}];
            });

            service.doAlta(altaData.email, altaData.password).then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['403']);
            });
        });

        it ('Test KO: Probar error en caso de 500',function () {
            var altaData ={
                email:'pepe@email.com',
                password:'12345'
            };

            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, altaData).respond(function () {
                return [500,{},{}];
            });

            service.doAlta(altaData.email, altaData.password).then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig['500']);
            });
        });

        it ('Test KO: Probar error en caso de 600',function () {
            var altaData ={
                email:'pepe@email.com',
                password:'12345'
            };

            var servConfig = config.backService.altaConf;
            var errorConfig = config.serviceError;
            var service = new AltaSrv();

            $httpBackend.expect(servConfig.method, servConfig.url, logingData).respond(function () {
                return [600,{},{}];
            });

            service.doLogin(logingData.email, logingData.password).then(function (result) {
                expect(false).toBe(true);
            }, function (error) {
                expect(error.usuario.msg).toBe(errorConfig.default);
            });
        });
    });
    
    describe("Test del controlador de login", function () {
       var controlador, $httpBackend, config;
        
        beforeEach(inject(function ($controller, $filter, LoginSrv, $state, _$httpBackend_,_config_) {
            controlador = function () {
                $httpBackend = _$httpBackend_;
                config = _config_;
                return $controller('LoginCtrl',{
                    '$filter':$filter,
                    'LoginSrv': LoginSrv,
                    '$state':$state
                });
            }
        }));
        
        
        it('Test OK: Comprobemos que nuestro contralador tiene declaradas las variables y eventos', function () {
           var ctrl = controlador();
            
            expect(ctrl.email).toBeDefined();
            expect(ctrl.password).toBeDefined();
            expect(ctrl.errorMsg).toBeDefined();
            expect(ctrl.loginAction).toBeDefined();
            expect(ctrl.clean).toBeDefined();
            expect(ctrl.alta).toBeDefined();
        });
        
        it('Test KO: Comprobamos que si el mail y el passoword no son validos no se llama al servcio',function () {
           var ctrl = controlador();
            ctrl.email = "";
            ctrl.password = "";
            
            var loginData = {
                email: ctrl.email,
                password: ctrl.password
            };
            
            var configServ = config.backService.loginConf;
            
            $httpBackend.expect(configServ.method, configServ.url, loginData).respond(function () {
                return [200,{},{}]
            });
            
            try{
                ctrl.loginAction();
                $httpBackend.flush();
                expect(true).toBe(false);
            }catch (e){
                expect(true).toBe(true);
            }
        });

        it('Test KO: Actualizamos el mesaje de error',function () {
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
                return [404,{},{}]
            });

            try{
                ctrl.loginAction();
                $httpBackend.flush();
                expect(ctrl.errorMsg).toBe(configError['404']);
            }catch (e){
                expect(true).toBe(false);
            }
        });

        it('Test OK: Probemos que el clean limpia el email y el password', function () {
           var ctrl = controlador();
            ctrl.email = "pepe@mail.com";
            ctrl.password = "123432";

            ctrl.clean();

            expect(ctrl.email).toBe("");
            expect(ctrl.password).toBe("");
        });
    });
});