const Authing = require('authing-js-sdk');

let auth = null, authed = false, authResult = false;

module.exports = function(options) {
    return function(req, res, next) {
        if(!authResult && !authed) {    
            auth = new Authing({
                userPoolId: options.userPoolId,
                secret: options.secret,
                onInitError: function(err) {
                    authResult = false;
                    throw err
                }
            });

            authed = true;
            authResult = true;
            req.authing = auth;
            next()
        } else {
           if(auth) {
              req.authing = auth;
              next()               
           }else {
               throw "您尚未通过 userPoolId 和 Secret 验证，请确认是否通过"           
           }
        }

    };
};
