const jwt = require('jsonwebtoken');
const User = require('../../../src/models/user')

/*
    POST /api/auth/register 
    {
        username,
        password
    }
*/

exports.register  = (req,res) => {
    const { username, password } = req.body;
    let newUser = null; 

    //create a new user if doesn't exist 
    const create = (user) => {
        if(user){
            throw new Error('username exists');
        } else {
            return User.create(username, password);
        }
    }

    //count the number of the user
    const count = (user) => {
        newUser = user;
        return User.count({}).exec();
    }

    // assign admin if count is 1
    const assign = ( count ) => {
        if(count === 1) {
            return newUser.assignAdmin();
        } else {
            //if not, return a promise that returns false
            return Promise.resolve(false); 
        }
    }
    // run when there is an error (username exists)
    const onError = (error) => {
        res.status(409).json({
            message: errormessage
        }); 
    }

    //check username duplication
    User.findOneByUsername(username)
        .then(create)
        .then(count)
        .then(assign)
        .then(respond)
        .catch(onError); 

}


/*
    POST /api/auth/login 
    {
        username,
        password
    }
*/

exports.login = (req, res) => {
    const {username, password} = req.body
    const secret = req.app.get('jwt-secret');

    //check the user info & generae the jwt
    const check = (user) => {
        if(!user){
            throw new Error('login failed')
        } else {
            if(user.verify(password)){
                const p = new Promise((resolve, reject) => {
                    jwt.sign(
                        {
                            _id: user._id,
                            username: user.username,
                            admin: user.admin 
                        },
                        secret,
                        {
                            expiresIn: '7d',
                            issuer: 's4.com',
                            subject: 'userInfo'
                        }, (err, token) => {
                            if(err) reject(err)
                            resolve(token)
                        }
                    );
                })
                return p;
            } else {
                throw new Error('login failed');
            }
        }
    }
    //respond the token
    const respond = (token) => {
        res.json({
            message: 'logged in successfully',
            token 
        });
    }

    //error occured 
    const onError = (error) => {
        res.status(403).json({
            message: error.message
        })
    }

    //find the user
    User.findOneByUsername(username)
        .then(check)
        .then(respond)
        .catch(onError); 
}

exports.register = (req, res) => {
    const { username, password } = req.body;
    let newUser = null;

    //create a new User if only one
    const create = (user) => {
        if(user) throw new Error('username exists');
        else return User.create(username, password);
    }


    // count the number of the user
    const count = (user) => {
        newUser = user;
        return User.count({}).exec();
    }

    //assign admin if count is 1 
    const assign = ( count ) => {
        if(count === 1) {
            return newUser.assignAdmin()
        } else {
            return Promise.resolve(false); 
        }
    }

    //respond to the client
    const respond = (isAdmin) => {
        res.json({
            message: 'registered sucessfully',
            admin: isAdmin? true : false 
        })
    }
    // run when there is an error( username exists)
    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }


    //check username duplication
    User.findOneByUsername(username)
        .then(create)
        .then(count)
        .then(assign)
        .then(respond)
        .catch(onError); 

}
/*
    GET /api/auth/check
*/

exports.check = (req, res) => 
    res.json({
        success: true,
        info: req.decode
    });

