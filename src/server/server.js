require('dotenv').config({ path: "./src/server/.env" });
const express = require('express');
const connect = require('./db.js');
const userRoutes = require('./router/userRouter.js');
const reviewRoutes = require('./router/reviewRouter.js');
const sessionRoutes = require('./router/sessionRouter.js');
const cors = require('cors');
const app = express();
const mongoStore = require('connect-mongo');
const session = require('express-session')
const router = express.Router()

app.use(cors());

app.use('/', express.static('./build'))
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


app.use(router)
router.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: mongoStore.create({
      mongoUrl: process.env.URL,
      dbName: 'ccapdev',
      ttl: 14 * 24 * 60 * 60,
    }),
  }) )

 

// Routes
app.use('/api/user/', userRoutes);
app.use('/api/reviews/', reviewRoutes);
app.use('/api/session/', sessionRoutes);


port = process.env.PORT || 5000
connect()
    .then(() => {
        console.log('Connected To MongoDB ', process.env.URL); // MongoDB URL
        app.listen(port, () => {
            console.log('Listening on port ', port); // localhost:5000
        });
    })
    .catch((error) => {
        console.log(error);
    });
