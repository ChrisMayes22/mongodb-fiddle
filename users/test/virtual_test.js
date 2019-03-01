const assert = require('assert');
const User = require('../src/user');

describe('Virtual Types', () => {
    it('postCount returns the length of user.posts', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: [{title: 'Hello Joe'}]
        });

        joe.save()
        .then(()=>{
            User.findOne({name: 'Joe'})
            .then((user) => {
                assert(user.postCount === 1);
                done();
            }).catch((error) => {
                console.log('ERROR: ', error)
            })
            
        })
        
    })
})