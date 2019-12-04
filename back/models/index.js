/******************************************************************************************************
 * Author: Youngjin Kwak
 * File name : index.js
 * Purpose : Collection of model
 * startedAt: 10/13/2019
 * Last update: 11/23/2019
*****************************************************************************************************/

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; // from dotenv file
const config = require('../config/config')[env]; // get dotenv file
const db = {};

/* Database name, username(id), password, config */
const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize); /* User */
db.Expense = require('./expense')(sequelize, Sequelize); /* Expense */
db.Tag = require('./tag')(sequelize, Sequelize); /* Tag */

/* 1:M User: Expenses */
db.User.hasMany(db.Expense);
db.Expense.belongsTo(db.User);

/* M:N Expenses : tags */
db.Expense.belongsToMany(db.Tag, {through: 'expenseTag'});
db.Tag.belongsToMany(db.Expense, {through: 'expenseTag'});

module.exports = db;