const mongoose = require('mongoose');


function connect() {
    return mongoose.connect(`${process.env.URL}ccapdev`);
    
}



module.exports = connect;