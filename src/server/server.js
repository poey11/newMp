require('dotenv').config();


const express = require('express');
const connectToDatabase = require('./db.js');

const web_routes = require('./router/Routes.js')

const  app = express();

//middleware
app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/', web_routes)


//connect db
connectToDatabase()
    .then(()=>{
        //listens to request
        console.log('Connected To MongoDB ', process.env.PORT);
        app.listen(process.env.PORT, ()=> {
            console.log('listening on port ', process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    })


