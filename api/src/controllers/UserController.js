const { promisify } = require('util');

const HidraService = require('../services/hidra');

class UserController {
    async show(req, res) {
        const user = {};

        return user;
    }

    async store(req, res) {
        const { email, username, password } = req.body;

        HidraService.registerUser({ user: {email, username, password}},
            function(err, response){
                if(err) console.log(err)
                else console.log(response);
            });

        return res.send();
    }
}

module.exports = new UserController();