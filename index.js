const Authing = require('authing-js-sdk');

let auth = null, authed = false, authResult = false;

module.exports = function(options) {
    return function(req, res, next) {
        if(!authResult && !authed) {    
            auth = new Authing({
                clientId: options.clientId,
                secret: options.secret,
            });

            authed = true;
            
            auth.then((validAuth) => {
              req.authing = validAuth;
              auth = validAuth;
              authResult = true;
              next()
            }).catch((error) => {
              authResult = false;
              throw error;
            });
        }else {
           if(auth) {
               req.authing = auth;
           }else {
               throw "您尚未通过clientId和Secret验证，请确认是否通过"           
           }
        }

    };
};
