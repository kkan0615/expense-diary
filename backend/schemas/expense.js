/**
* Expense collection
*/
const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const expenseSchema = new Schema({
   user: {
       type: ObjectId,
       required: true,
       ref: 'User',
   },
   title: {
       type: String,
       required: true,
   },
   content: {
       type: String,
       required: true,
   },
   img: String,
   color: {
        type: String,
        required: true,
        defualt: '#FFFFFF'
   },
   time: {
       type: Date,
       default: Date.now,
   },
});

module.exports = mongoose.model('Expense', expenseSchema);