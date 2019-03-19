const app = require('../app');
const request = require('supertest');
const User = require('../models/users');

beforeEach(async function(){
    try{
        const user = await User.findOne({});
        if(user){
            await User.collection.drop();
        }
    } catch (e) {
        console.log('Err clearing database:', e);
    }
})

describe('Test Setup', () => {
    test('test environment variables configured correctly', () => {
        expect(process.env.PORT).toBe('3000');
        expect(process.env.DBURI).toBe('mongodb://127.0.0.1:27017/restExample_TEST');
    });
})
describe('When requests are made to user REST endpoints', () => {
    test('Given a valid POST to /users, the user is saved successfully.', async () => {

        const user = { "name": "fooUser", "password": "fooPsword221", "age": 99, "email":"emaily@emaily.com" };

        await request(app)
            .post('/users')
            .send(user)
            .expect('Content-Type', /text/)
            .expect(200)

        const foundUser = await User.findOne({ name: 'fooUser' });
        expect(foundUser.name).toBe('fooUser');

    });
    test('Given an invalid POST to /users, the user is saved successfully.', async () => {

        const user = { "fooID":"fooID" };

        await request(app)
            .post('/users')
            .send(user)
            .expect(400)

        const foundUser = await User.findOne({ name: 'fooUser' });
        expect(foundUser).toBe(null);

    });
    test('Given a valid GET to /users, an array of all saved users are returned.', async () => {

        const user = new User({ "name": "fooUser", "password": "fooPsword221", "age": 99, "email":"emaily@emaily.com" });
        const user2 = new User({ "name": "fooUser2", "password": "fooPsword221", "age": 99, "email":"emaily@emaily.com" });
        user.save();
        user2.save();

        await request(app)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(res => {
                expect(res.body.length).toEqual(2);
                expect(res.body[0].name).toEqual('fooUser');
                expect(res.body[1].name).toEqual('fooUser2');
            })
    });
})
