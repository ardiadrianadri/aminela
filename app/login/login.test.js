describe('Test del modulo login', function () {
	//Comentario tonto
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
    describe('Tests del filtro de contraseña',function () {
        var PasswordFilter, config;
        
        beforeEach(inject(function (PasswordFilterFilter, _config_) {
            PasswordFilter = PasswordFilterFilter;
            config = _config_;
        }));
        
        it('Test OK: La contraseña del filtro esta bien formada',function () {
            var mail = 'abcdfghij';
            
            expect(PasswordFilter(password)).toBe(false);
        });
        
        it('Test KO: La contraseña del filtro esta mal formada', function () {
            var mail = 'p';
            
            expect(PasswordFilter(password)).toBe(config.msgError.invalidPassword);
        });
        
    });
});