const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../schemas/user');

router.post('/join', isLoggedIn, async(req, res, next) => {
    const { email, nickname, password } = req.body;
    try {
        const exUser = await User.findOne({ email: email });
        if(exUser) {
            res.status(401).send('This email is already existed');
        }
        const bash = await bcrypt.hash(password, 12);

        const user = new User({
            email: email,
            password: bash,
            nickname: nickname,
        })

        await user.save();
        res.send('Success to register');
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }

        if(!user) {
            return res.send(info.message);
        }

        return req.login(user, (loginError) => {
            if(loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.send('Logged in');
        });

    }) (req, res, next);
});

router.get('/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    return res.send();
});

module.exports = router;