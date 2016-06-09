

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

});