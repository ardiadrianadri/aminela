function Config (){
    return {
        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,

            password: /^[\p{Z}\s]*(?:[^\p{Z}\s][\p{Z}\s]*){3,}/
        },
        msgError:{
            invalidMail:'Mail mal formado',
            invalidPassword:'Contraseña no valida'

        }
    };
}


module.exports=angular.module('common',[]).constant('config',Config());