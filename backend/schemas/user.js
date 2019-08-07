/**
 * User collection
 */
const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);