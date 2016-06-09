describe('Test del modulo common',function () {
   
    beforeEach(window.module('app'));
    
    describe('Test del servicio de error',function () {
       var config, ErrorManager;
        
        beforeEach(inject(function (_config_, _ErrorManager_) {
            config = _config_;
            ErrorManager = _ErrorManager_;
        }));
        
        it('Test OK: Probar que obtenemos el mensaje correcto ante un error 404',function () {
           var service = new ErrorManager();
            var error = {
                status:404
            };
            
            var customError = service.getCustomError(error);
            
            expect(customError.usuario.msg).toBe(config.serviceError["404"]);
        });

        it('Test OK: Probar que obtenemos el mensaje correcto ante un error 401',function () {
            var service = new ErrorManager();
            var error = {
                status:401
            };

            var customError = service.getCustomError(error);

            expect(customError.usuario.msg).toBe(config.serviceError["401"]);
        });

        it('Test OK: Probar que obtenemos el mensaje correcto ante un error 403',function () {
            var service = new ErrorManager();
            var error = {
                status:403
            };

            var customError = service.getCustomError(error);

            expect(customError.usuario.msg).toBe(config.serviceError["403"]);
        });

        it('Test OK: Probar que obtenemos el mensaje correcto ante un error 500',function () {
            var service = new ErrorManager();
            var error = {
                status:500
            };

            var customError = service.getCustomError(error);

            expect(customError.usuario.msg).toBe(config.serviceError["500"]);
        });

        it('Test OK: Probar que obtenemos el mensaje correcto ante un error default',function () {
            var service = new ErrorManager();
            var error = {
                status:700
            };

            var customError = service.getCustomError(error);

            expect(customError.usuario.msg).toBe(config.serviceError.default);
        });
        
    });
});