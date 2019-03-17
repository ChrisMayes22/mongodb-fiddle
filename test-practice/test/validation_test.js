const assert = require('assert');
const User = require('../src/user');

describe('Validating Records', () => {
    it('Requires a name', () => {
        const user = new User({ name: undefined });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name;

        assert(message === 'A username is a required.');
    })

    it('Name is at least three characters.', () => {
        const user = new User({ name: 'Jo' });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name;

        assert(message === 'Name must be longer than two characters.');
    })

    it('Name is at least three characters.', (done) => {
        const user = new User({ name: 'Jo' });
        user.save()
            .catch((validationResult) => {
                const { message } = validationResult.errors.name;

                assert(message === 'Name must be longer than two characters.');
                done();
            })
    })
})