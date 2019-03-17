const assert = require('assert');
const User = require('../src/user');

describe('When a new user is created', function(){
    it('User is stored in the database', function(done){
        const joe = new User({ name: 'Joe'});

        joe.save()
            .then(function(){
                assert(!joe.isNew);
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    });
});