const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments', () => {
    it('Can create a subdocument', (done) => {
        const joe = new User({name: 'Joe', postCount: 1, posts: [{title: 'title'}]})
            
        joe.save()
            .then(() => User.findOne({name: 'Joe'}))
                .then(user => {
                assert(user.posts[0].title === 'title');
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    });
    it('Can update a user with a subdocument', (done) => {
        const joe = new User({name: 'Joe', postCount: 0, posts: []});

        joe.save()
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                user.posts.push({title: 'Hello Joe!'});
                user.postCount++;
                return user.save();
            })
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user.posts[0].title === 'Hello Joe!');
                assert(user.postCount === 1);
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    });
    it('Can update a user with a subdocument', (done) => {
        const joe = new User({
            name: 'Joe', 
            posts: [{ title: 'Hello Joe!' }]
        });

        joe.save()
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                user.posts.splice(0, 1);
                return user.save();
            })
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user.posts.length === 0);
                done();
            })
            .catch((error) => console.log('ERROR: ', error));
    });
});