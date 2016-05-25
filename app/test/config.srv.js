function Config (){
    return {
        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}"
        },
        msgError:{
            invalidMail:'Mail mal formado',
            invalidPassword:'Contraseña no valida'
        }
    };
}


module.exports=angular.module('common',[]).constant('config',Config());