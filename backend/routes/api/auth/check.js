const jwt = require('jsonwebtoken');

exports.check = (req, res) => {
    //read the token from header or url
    const token = req.headers['x-access-token'] || req.query.token

    //token doesn't exist 
    if(!token) {
        return res.status(403).json({
            success: false,
            message: 'not logged in'
        });
    }

    //create a promise that decodes the token 
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'),  (err, decode) => {
                if(err) reject(err)
                resolve(decoded)
            });
        }
    );

    //if token is valid, it will respond its info
    const respond = (token) => {
        res.json({
            success: true,
            info: token
        }); 
    }

    //if it has filed to verify, it will return an error message
    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        });
    }
}   
//proccess the promise
p.then(respond).catch(onError); 