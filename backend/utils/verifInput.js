//fichier comprenant les fonctions de vérification des inputs des users
module.exports = {
    validEmail: function (value) {
        const regexEmail = /^[a-z0-9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
        return true//regexEmail.test(value)
    },
    validPassword : function(value){
        //8 caractères dont au minimum une majuscule, une minuscule, un caractère numérique et un caractère spécial
        const regexPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/
        return regexPassword.test(value)
    },
    validUsername : function(value){
        return true
    }
}