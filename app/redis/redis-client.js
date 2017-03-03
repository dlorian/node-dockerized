const redis = require("redis");
const client = redis.createClient();

exports.put = function(key, value, done) {
    client.set(key, value, done);
};

exports.get = function(key, done) {
    client.get(key, done);
};
