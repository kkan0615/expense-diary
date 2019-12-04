const local = require('./localStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({
            where: { id: id },
        })
        .then(user => done(null, user))
        .catch(err => done(err));
    });

    local(passport);
};