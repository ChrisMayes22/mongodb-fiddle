const assert = require('assert');
const User = require('../src/user');

describe('When a query is made for an existing user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe'});

        joe.save()
            .then(() => done());
    });

    it('Given that the `find` query is used, the user object is returned', (done) => {
        User.find({name: 'Joe'})
            .then((users) => {
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    });
    it('Given that the `findOne` query is used, the user object is returned', (done) => {
        User.findOne({_id: joe._id})
            .then((user) => {
                assert(user.name === "Joe");
                done();
            }).catch((error) => console.log('ERROR: ', error));
    });
});