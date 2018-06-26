const Authing = require('authing-js-sdk');
module.exports = function(options) {
    return function(req, res, next) {
        const auth = new Authing({
            clientId: options.clientId,
            secret: options.secret,
        })
        auth.then((validAuth) => {
            req.authing = validAuth;
            next()
        }).catch((error) => {
            throw error;
        });
    };
};
