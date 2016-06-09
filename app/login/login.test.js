

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
        
        it('Test KO 400: Probemos que obtenemos un error 400',function () {
           var logingData ={
               email:'pepe',
               password:'1'
           };

            var servConfig = config.backService.loginConf;
            var service = new LoginSrv();
            var erorConfig = config.serviceError;
                
            $httpBackend.expect(servConfig.method, servConfig.url, logingData).respond(function () {
                return [400,{data:'Petición incorrecta'},{}];
            });

            service.doLogin(logingData.email, logingData.password).
            then(function (result) {
                 expect(false).toBe(true);
            }, function (error) {
               
                expect(result.data).toBe('Petición incorrecta');
            });
            
            $httpBackend.flush();
        });
    });

});