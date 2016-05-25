function Config (){
    return {
        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
<<<<<<< HEAD
            password: /^[\p{Z}\s]*(?:[^\p{Z}\s][\p{Z}\s]*){3,}/
        },
        msgError:{
            invalidMail:'Mail mal formado',
            invalidPassword:'Contraseña no valida'
=======
            pass: /^.{2,}$/
        },
        msgError:{
            invalidMail:'Mail mal formado',
            invalidPass:'Password mal formado'
>>>>>>> 068108f5581ae1a5ab7d417d1ea0c18303bed593
        }
    };
}


module.exports=angular.module('common',[]).constant('config',Config());