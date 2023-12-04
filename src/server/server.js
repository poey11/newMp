
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const connect = require('./db.js');

const userRoutes = require('./router/userRouter.js')
const reviewRoutes = require('./router/reviewRouter.js');
const cors = require('cors');
const  app = express();


app.use(cors());

app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

//routess
app.use('/api/user/', userRoutes)
app.use('/api/reviews/', reviewRoutes);




connect()
    .then(()=>{
        //listens to request
       
        console.log('Connected To MongoDB ', process.env.URL);
        app.listen(process.env.PORT, ()=> {
            console.log('listening on port ', process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    }
)

