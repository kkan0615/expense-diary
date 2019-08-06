const mongoose = require('mongoose');

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL = 'mongodb://'+MONGO_ID+':'+MONGO_PASSWORD+'@localhost:27017/admin';

module.exports = () => {
    const connect = () => {
        if(NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect(MONGO_URL, {
            dbName: 'expense-diary',
        }, (error) => {
            if(error) {
                console.log('mongo db error!', error);
            } else {
                console.log('Mongo db connection is sccuess');
            }
        });
    };
    connect();

    mongoose.connection.on('error', (error) => {
        console.error('mongoDB Error!', error);
    });
    mongoose.connection.on('disconnected', () => {
        console.error('MongoDB Connection is gone, Retry to connect with MongoDB.');
        connect();
    });

    require('./user');
    require('./expense');
}