const assert = require('assert');
const User = require('../src/user');

describe('When a user is deleted', function(){
    beforeEach(function(done){
        joe = new User({ name: 'Joe'});

        joe.save()
            .then(() => done());
    });

    it('model instance remove', function(done){
        joe.remove()
            .then(() => User.findOne({name: 'Joe'}))
            .then((user)=>{
                assert(user === null);
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    });

    it('class method remove', function(done){
        User.deleteOne({name: 'Joe'}) 
            .then(() => User.findOne({name: 'Joe'}))
            .then((user)=>{
                assert(user === null);
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    });
    it('class method findOneAndRemove', function(done){
        User.findOneAndRemove({name: 'Joe'})
            .then(() => User.findOne({name: 'Joe'}))
            .then((user)=>{
                assert(user === null);
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    });
    it('class method findByIdAndRemove', function(done){
        User.findByIdAndRemove({_id: joe._id})
            .then(() => User.findOne({name: 'Joe'}))
            .then((user)=>{
                assert(user === null);
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    });
});