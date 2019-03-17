const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test', { useNewUrlParser: true});
mongoose.connection
    .once('open', () => console.log('good to go!'))
    .on('Error', (error) => {
        console.warn('Warning', error)
    });

    beforeEach(function(done){
        mongoose.connection.collections.users.drop(function(){
            done();
        })
    })