const local = require('./localStrategy');
const User = require('../schemas/user');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({
            _id: id,
        })
        .then(user => done(null, user))
        .catch(err => done(err));
    });

    local(passport);
};