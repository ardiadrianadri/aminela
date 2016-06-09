function Config (){
    return {
        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,

            password: /^[\p{Z}\s]*(?:[^\p{Z}\s][\p{Z}\s]*){3,}/
        },
        msgError:{
            invalidMail:'Mail mal formado',
<<<<<<< HEAD
            invalidPassword:'Contraseña no valida'

=======
            invalidPass:'Password mal formado'
        },
        backService:{
            loginConf:{
                method:'POST',
                url:'/test',
                responseType: 'json'
            }
        },
        serviceError:{
            "404":"No se encuentra el servicio, pongase en contacto con el administrador",
            "401":"Usuario o password incorrecto",
            "403":"No tienes permisos para acceder",
            "500":"Fallo del sistema pongase en contacto con el administrador",
            default:"Buena suerta y que la fuerza te acompañe"
>>>>>>> 45592fa31459abb2af567bb88f1265f1558432eb
        }
    };
}


module.exports=angular.module('common',[]).constant('config',Config());