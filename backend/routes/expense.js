const express = require('express');
const router = express.Router();
const cors = require('cors');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../schemas/user');
const Expense = require('../schemas/expense');

//For cors error
router.use(cors());

router.get('/expense', isLoggedIn, async(req, res, next) => {
    try {
        const User = await User.findOne({
            where: { _id: req.body._id }
        });

        if(!User) {
            res.status(403).send('User can not be found');
        }

        let data = null
        data = await Expense.find({
            where: { user: User }
        })
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/expense', isLoggedIn, (req, res, next) => {
    try {
        const User = await User.findOne({
            where: { _id: req.body._id }
        });

        if(!User) {
            res.status(403).send('User can not be found');
        }
        const expense = new Expense({
            User: User,
            title: req.body.title,
            content: req.body.content,
            color: req.body.color,
        });

        return res.json({ message: 'Sccucess to add', expense: expense });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    return res.send();
});

module.exports = router;