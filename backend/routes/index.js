const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {

    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports= router;