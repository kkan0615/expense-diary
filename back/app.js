const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const { sequelize } = require('./models');
const passport = require('passport');
const passportConfig = require('./passport');
require('dotenv').config();

/* Router Collection */
const authRouter = require('./routes/auth');
const expenseRouter = require('./routes/expense');
const calendarRouter = require('./routes/calendar');

const app = express();
sequelize.sync();
passportConfig(passport);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionMiddleware = session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.set('port', process.env.PORT || 8001);
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/expense', expenseRouter);
app.use('/calendar', calendarRouter);

const server = app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'is wating you!');
});