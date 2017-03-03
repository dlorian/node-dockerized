const redisClient = require('../../redis/redis-client');
const expect = require('chai').expect;

describe('RedisClient', () => {

    describe('#put()', () => {
        it('should add key', (done) => {
            redisClient.put('key', 'value', function(err, reply) {
                expect(reply).to.be.ok;
                done(err);
            });
        });
    });

    describe('#get()', () => {

        before((done) => {
            redisClient.put('key', 'value', done);
        });

        it('should find key', (done) => {
            redisClient.get('key', (err, reply) => {
                expect(reply).to.be.ok;
                expect(reply).to.be.eql('value');
                done(err);
            });
        });

        it('should find no key', (done) => {
            redisClient.get('key2', (err, reply) => {
                expect(reply).to.be.not.ok;
                done(err);
            });
        });
    });
});
