const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');//User is a collection, we query a collection.

passport.use(new LocalStrategy({
    usernameField: 'email'
}, (username, password, done) => {
    //collection query...
    User.findOne({email: username}, (err, user) => {
        if(err) {
            return done(err);
        }
        if(!user) {
            return done(null, false, {message: 'incorrect username'});
        }
        if(user.passwordIsValid(password)) {
            return done(null, user);

        } else {
            return done(null, false, {message: 'incorrect password'});
        }
    });
}));