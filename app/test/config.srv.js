function Config (){
    return {
        validation:{
            email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            pass: /^.{2,}$/
        },
        msgError:{
            invalidMail:'Mail mal formado',
            invalidPass:'Password mal formado'
        }
    };
}


module.exports=angular.module('common',[]).constant('config',Config());