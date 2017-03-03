
const mongoClient = require('../../mongo/mongo-client');
const expect = require('chai').expect;

describe('MongoClient', () => {

    beforeEach((done) => {
        mongoClient.clear(done);
    });

    describe('#add()', () => {
        it('should add document', (done) => {
            mongoClient.add({key: 'value'}, (err, result) => {
                expect(result).to.be.ok;
                done(err);
            });
        });
    });

    describe('#findAll()', () => {
        it('should find document', (done) => {
            // 1. Add one doc
            mongoClient.add({key: 'value'}, (err, result) => {
                expect(result).to.be.ok;
                // 2. Find all document
                mongoClient.findAll((err, result) => {
                    expect(result).to.be.not.empty;
                    done(err);
                });
            });
        });
    });

    describe('#clear()', () => {
        it('should delete all documents', (done) => {
            // 1. Add one doc
            mongoClient.add({key: 'value'}, (err, result) => {
                expect(result).to.be.ok;
                // 2. delete all
                mongoClient.clear((err, result) => {
                    expect(result).to.be.not.empty;
                    // 3. find should be empty
                    mongoClient.findAll((err, result) => {
                        expect(result).to.be.empty;
                        done(err);
                    });
                });
            });
        });
    });
});
