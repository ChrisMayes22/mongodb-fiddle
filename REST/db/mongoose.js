const   mongoose                      = require('mongoose');
        connectionURL                 = 'mongodb://127.0.0.1:27017';
        databaseName                  = 'restExample';
        validator                     = require('validator');

mongoose.connect(`${connectionURL}/${databaseName}`, {
     useNewUrlParser: true, 
     useCreateIndex: true  
});

// const James = new User({
//     name: 'James',
//     email: 't-sha@gmail.com',
//     age: 21,
//     password: 'abcdefgPAsswOrdak;hgsdlk'
// });

// James.save().then(user => {
//     console.log('James Saved')
//     console.log(user);
// }).catch(err => {
//     console.log(err);
// })

