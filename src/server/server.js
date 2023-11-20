require('dotenv').config();


const express = require('express');
const connectToDatabase = require('./db.js');

const register_routes = require('./router/Register_routes.js')

const  app = express();

//middleware
app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/register/', register_routes)
//app.use('/api/')

//connect db
connectToDatabase()
    .then(()=>{
        //listens to request
        console.log('Connected To MongoDB ', process.env.MONGO_URL);
        app.listen(process.env.PORT, ()=> {
            console.log('listening on port ', process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    })


