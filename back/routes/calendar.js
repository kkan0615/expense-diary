<<<<<<< HEAD
/******************************************************************************************************
 * Author: Youngjin Kwak
 * File name : calendar.js
 * Purpose : Calendar router
 * url: /calendar
 * startedAt: 10/23/2019
 * Last update: 11/23/2019
*****************************************************************************************************/

=======
>>>>>>> 9fdf3c5b52260536aa56ce6b709c0dd4739884cc
const express = require('express');
const { isLoggedIn } = require('./middlewares');
const { Expense } = require('../models');

const router =express.Router();

<<<<<<< HEAD
/******************************************************************************************************
 * Author: Youngjin Kwak
 * File name : calendar.js
 * Purpose : Calendar router
 * url: /calendar/
 * startedAt: 10/23/2019
 * Last update: 11/23/2019
*****************************************************************************************************/
router.post('/', isLoggedIn, async(req, res, next) => {
    try {
        const { year, months } = req.body;

        /* Find all expenses */
=======
router.post('/', isLoggedIn, async(req, res, next) => {
    try {
        const { year, month } = req.body;

>>>>>>> 9fdf3c5b52260536aa56ce6b709c0dd4739884cc
        const expenses = await Expense.findAll({
            order: [['day', 'ASC']],
            where: {
                year: year,
                month: month,
            }
        });

<<<<<<< HEAD
        /* Sum and average */
=======
>>>>>>> 9fdf3c5b52260536aa56ce6b709c0dd4739884cc
        const info = await Expense.findAll({
            attributes: [
                [Expense.sequelize.fn('AVG', Expense.sequelize.col('money')), 'moneyAvg'],
                [Expense.sequelize.fn('SUM', Expense.sequelize.col('money')), 'moneySUM'],
            ],
            where: {
                year: year,
                month: month,
            }
        });

        return res.json({
            expenses,
            avg: info[0].dataValues.moneyAvg,
            sum: info[0].dataValues.moneySUM,
        });

    } catch (error) {
        console.error(error);
        next(error);
    }
});

<<<<<<< HEAD
/**
 * Author: Youngjin Kwak
 * File name : calendar.js
 * Purpose : Calendar of year and month
 * url: /calendar/detail
 * startedAt: 10/23/2019
 * Last update: 12/01/2019
 */
router.post('/detail', isLoggedIn, async(req, res, next) => {
    try {
        /* Get data from client */
        const { year, month, order } = req.body;

        const expenses = await Expense.findAll({
            order: [['day', 'ASC']],
            where: {
                year: year,
                month: month,
            }
        });

        const monthInfo = await Expense.findAll({
            attributes: [
                [Expense.sequelize.fn('AVG', Expense.sequelize.col('money')), 'moneyAvg'],
                [Expense.sequelize.fn('SUM', Expense.sequelize.col('money')), 'moneySUM'],
            ],
            where: {
                year: year,
                month: month,
                day: 7,
            }
        });

        const yearInfo = await Expense.findAll({
            attributes: [
                [Expense.sequelize.fn('AVG', Expense.sequelize.col('money')), 'yearAvg'],
                [Expense.sequelize.fn('SUM', Expense.sequelize.col('money')), 'yearSum'],
            ],
            where: {
                year: year,
            }
        });

        console.log(monthInfo);


        return res.json({
            expenses,
            monthOfAvg: monthInfo[0].dataValues.moneyAvg,
            monthOfSum: monthInfo[0].dataValues.moneySum,
            yearOfAvg: yearInfo[0].dataValues.yearAvg,
            yearOfSum: yearInfo[0].dataValues.yearSum,

        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

/**
 * Author: Youngjin Kwak
 * File name : calendar.js
 * Purpose : Calendar of year
 * url: /calendar/detailOfYear
 * startedAt: 10/23/2019
 * Last update: 11/23/2019
 */
=======
>>>>>>> 9fdf3c5b52260536aa56ce6b709c0dd4739884cc
module.exports = router;