const util = require('util');
const MongoClient = require('mongodb').MongoClient;

let url;
if(process.env.MONGO_HOST && process.env.MONGO_PORT) {
    url = util.format('mongodb://%s:%d/test', process.env.MONGO_HOST, process.env.MONGO_PORT);
}
else {
    url = 'mongodb://localhost:27017/test'
}

const executeOnDb = function(fn, done)  {
    MongoClient.connect(url, function(err, db) {
        const next = (err, result) => {
            db.close();
            done(err, result);
        };

        fn.call(null, db, next);
    });
};

const insertOne = function(db, doc, next) {
   db.collection('test').insertOne(doc, next);
};

const clear = function(db, next) {
    db.collection('test').deleteMany({}, next);
};


const findAll = function(db, next) {
    const cursor = db.collection('test').find({});
    let docs = [];
    cursor.each((err, doc) => {
        if (doc != null) {
            docs.push(doc);
        } else {
            next(null, docs);
        }
    });
};

exports.add = function(doc, done) {
    executeOnDb((db, next) =>  {
        insertOne(db, doc, next);
    }, done);
};

exports.findAll = function(done) {
    executeOnDb(findAll, done);
};

exports.clear = function(done)  {
    executeOnDb(clear, done);
}
