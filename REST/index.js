const   mongoose                      = require('mongoose');
        connectionURL                 = 'mongodb://127.0.0.1:27017';
        databaseName                  = 'restExample';

mongoose.connect(`${connectionURL}/${databaseName}`, {
     useNewUrlParser: true, 
     useCreateIndex: true  
});

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const John = new User({ name: 'John Smith', age: 12 });

John.save().then(done => {
    console.log('John Saved')
    console.log(done);
}).catch(err => {
    console.log(err);
})