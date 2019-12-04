const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');

const router =express.Router();

router.post('/signUp', isNotLoggedIn, async(req, res, next) => {
    console.log('Sing up is passed');

    const { email, nick, password, img } = req.body;
    try {
        const exUser = await User.findOne({
            where: { email: email }
        });
        if(exUser) {
            return res.status(403).json({
                errorCode: 1,
                message: 'This email is already using',
            });
        }

        const bash = await bcrypt.hash(password, 12);

        const user = await User.create({
            email: email,
            nickname: nick,
            password: bash,
            img: null,
            isValidate: true,
        });

        return res.json({
            user
        });
    } catch (error) {
        console.error(error);
        return next(error);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    console.log('login is passed');

    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }

        if(!user) {
            return res.status(401).json({
                errorCode : 2,
                message: info.message
            });
        }

        return req.login(user, (loginError) => {
            if(loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.json({
                user
            });
        });

    }) (req, res, next);
});

router.post('/logout', isLoggedIn, (req, res, next) => {
    console.log('logout is here');

    req.logout();
    return res.status(200).send('LOGOUT');
});

module.exports = router;