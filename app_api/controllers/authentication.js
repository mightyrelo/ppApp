const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');

const sendJSONResponse = (res, code, content) => {
    res
      .status(code)
      .json(content);
};

const register = (req, res) => {
    if(!req.body.email || !req.body.password || !req.body.name) {
        sendJSONResponse(res, 400, {"message":"name, email and password required"});
        return;
    }
    const newUser = new User();
    newUser.email = req.body.email;
    newUser.name = req.body.name;
    newUser.setPassword(req.body.password);
    newUser.save(err => {
        if(err) {sendJSONResponse(res, 400, err); return;}
        sendJSONResponse(res, 201, newUser.generateJwt());
    });
};

const login = (req, res) => {
    if(!req.body.email || !req.body.password) {
        sendJSONResponse(res, 400, {"message":"email and password required"});
        return;
    }
    passport.authenticate('local', (err, user, info) => {
        if(err) {sendJSONResponse(res, 404, err); return;}
        if(user) {
            sendJSONResponse(res, 200, user.generateJwt()); return;
        } else {
            sendJSONResponse(res, 401, info);
        }
    })(req, res);    
};


module.exports = {
    register,
    login
};