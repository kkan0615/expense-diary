/****************************************************************************************************
 * Authour: Youngjin Kwak(곽영진)
 * Purpose:
 * list of API:
 * startedAt: 10/13/2019
 * Last Update: 11/23/2019
 * Version: 1.0
*****************************************************************************************************/

const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Expense } = require('../models');

const router = express.Router();

/****************************************************************************************************
 * Authour: Youngjin Kwak(곽영진)
 * RESTful API: Post
 * Middlewares: isLoggedIn
 * Purpose: Create the expense
 * startedAt: 10/13/2019
 * Last Update: 11/23/2019
 * Version: 1.0
*****************************************************************************************************/
router.post('/create', isLoggedIn, async(req, res, next) => {
    try {
        /* Data from body */
        const { title, content, color, money, year, month, day /*, tag */ } = req.body;

        /* Create expense */
        const expense = await Expense.create({
            title: title,
            content: content,
            color: color,
            money: parseInt(money),
            year: year,
            month: month,
            day: day,
            userId: req.user.id
        });

        const info = await Expense.findAll({
            attributes: [
                [Expense.sequelize.fn('AVG', Expense.sequelize.col('money')), 'moneyAvg'],
                [Expense.sequelize.fn('SUM', Expense.sequelize.col('money')), 'moneySUM'],
            ],
            where: {
                year: year,
                month: month,
                day: day
            }
        });

        /*
        const tags = await tags.findAll({

        });
        */
        return res.json({
            expense,
            avg: parseInt(info[0].dataValues.moneyAvg),
            sum: info[0].dataValues.moneySUM,
            /* tags, */
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/detail', isLoggedIn, async(req, res, next) => {
    try {
        const { year, month, day } = req.query;

        const expenses = await Expense.findAll({
            order: [['createdAt', 'ASC']],
            where: {
                year: year,
                month: month,
                day: day
            }
        });

        const info = await Expense.findAll({
            attributes: [
                [Expense.sequelize.fn('AVG', Expense.sequelize.col('money')), 'moneyAvg'],
                [Expense.sequelize.fn('SUM', Expense.sequelize.col('money')), 'moneySUM'],
            ],
            where: {
                year: year,
                month: month,
                day: day
            }
        });

        return res.json({
            expenses,
            avg: parseInt(info[0].dataValues.moneyAvg),
            sum: parseInt(info[0].dataValues.moneySUM),
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/detail/remove', isLoggedIn, async(req, res, next) => {
    try {
        const { year, month, day, id } = req.body;

        const expense = await Expense.destroy({
            where: {
                year: year,
                month: month,
                day: day,
                id: id
            }
        });

        const info = await Expense.findAll({
            attributes: [
                [Expense.sequelize.fn('AVG', Expense.sequelize.col('money')), 'moneyAvg'],
                [Expense.sequelize.fn('SUM', Expense.sequelize.col('money')), 'moneySUM'],
            ],
            where: {
                year: year,
                month: month,
                day: day
            }
        });
        console.log(expense);


        return res.json({
            id,
            avg: parseInt(info[0].dataValues.moneyAvg),
            sum: parseInt(info[0].dataValues.moneySUM),
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/detail/edit', isLoggedIn, async(req, res, next) => {
    try {
        const { id, content, title, color, money } = req.body;

        const expense = await Expense.update({
            title,
            content,
            color,
            money: parseInt(money)
        }, {
            where: { id }
        });

        const info = await Expense.findAll({
            attributes: [
                [Expense.sequelize.fn('AVG', Expense.sequelize.col('money')), 'moneyAvg'],
                [Expense.sequelize.fn('SUM', Expense.sequelize.col('money')), 'moneySUM'],
            ],
            where: {
                year: year,
                month: month,
                day: day
            }
        });

        return res.json({
            expense,
            avg: parseInt(info[0].dataValues.moneyAvg),
            sum: parseInt(info[0].dataValues.moneySUM),
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;