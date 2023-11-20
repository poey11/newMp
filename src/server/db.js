const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

function connect() {
    return mongoose.connect(process.env.MONGO_URL)
}

module.exports = connect;