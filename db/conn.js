const dotenv = require('dotenv');
dotenv.config();
const mongodb = require('mongodb');
mongodb.MongoClient

const mongoURI = process.env.MONGODB_URI;
const client = new mongodb.MongoClient(mongoURI);
function connectToMongo(callback){
    client.connect((err, client) => {
        return callback(err);
    });
    return callback();
}

function getDb (dbName = process.env.DB_NAME){
    return client.db(dbName);
}

module.exports = {
    connectToMongo,
    getDb
}