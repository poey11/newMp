require('dotenv').config({ path: "./src/server/.env" });
const express = require('express');
const connect = require('./db.js');
const userRoutes = require('./router/userRouter.js');
const reviewRoutes = require('./router/reviewRouter.js');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/', express.static('./src'))
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/user/', userRoutes);
app.use('/api/reviews/', reviewRoutes);
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
