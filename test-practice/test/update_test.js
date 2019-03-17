const assert = require('assert');
const User = require('../src/user');

describe('When a user is updated', function(){
    beforeEach((done) => {
        joe = new User({ name: 'Joe'});

        joe.save()
            .then(() => done());
    });

    function assertName(operation, done){
        operation
            .then(()=> User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex');
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    }

    it('Instance type using set & save', (done) => {
        joe.set('name', 'Alex');
            assertName(joe.save(), done)
    });

    it('A model class can update one record', (done) => {
        assertName(User.findOneAndUpdate({name: 'Joe'}, {name: 'Alex'}), done);
    })

    it('A model class can update one record found by id', (done) => {
        assertName(User.findByIdAndUpdate({_id: joe.id}, {name: 'Alex'}), done);
    })

    it('A user can have their friends incremented by 1', (done) => {
        User.updateOne({name: 'Joe'}, {$inc: {friends: 1}})
        .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user.friends === 1);
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    })
});