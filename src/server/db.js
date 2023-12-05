const mongoose = require('mongoose');
require('dotenv').config({path: "./src/server/.env"});


function connect() {
    return mongoose.connect(process.env.URL);
}



module.exports = connect;