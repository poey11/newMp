require('dotenv').config({ path: "./src/server/.env" });
const express = require('express');
const connect = require('./db.js');
const userRoutes = require('./router/userRouter.js');
const reviewRoutes = require('./router/reviewRouter.js');
const app = express();
app.use(cors());


app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/user/', userRoutes);
app.use('/api/reviews/', reviewRoutes);

connect()
    .then(() => {
        console.log('Connected To MongoDB ', process.env.URL); // MongoDB URL
        app.listen(process.env.PORT, () => {
            console.log('Listening on port ', process.env.PORT); // localhost:5000
        });
    })
    .catch((error) => {
        console.log(error);
    });
