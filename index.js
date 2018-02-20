const mongo = require('mongodb').MongoClient;
const mongoString = process.env.MONGO_URI ||
    'mongodb://localhost:27017/test';

module.exports = mongo.connect(mongoString)
    .catch(e => {
        console.log(e.message);
        process.exit(1);
    });
