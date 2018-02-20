const mongo = require('mongodb').MongoClient;
const mongoString = process.env.MONGO_URI ||
    'mongodb://localhost:27017/test';

module.exports = mongo.connect(mongoString)
    .then(client => {
        if('databaseName' in client){
            return client;
        }
        const db = client.db('test');
        db.close = client.close.bind(client);
        return db;
    })
    .catch(e => {
        console.log(e.message);
        process.exit(1);
    });
