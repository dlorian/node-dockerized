const redis = require("redis");

let client = null;
if(process.env.REDIS_HOST && process.env.REDIS_PORT) {
 client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
}
else {
    client = redis.createClient();
}

exports.put = function(key, value, done) {
    client.set(key, value, done);
};

exports.get = function(key, done) {
    client.get(key, done);
};
