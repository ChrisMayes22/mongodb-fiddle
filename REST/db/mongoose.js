const   mongoose                      = require('mongoose');
        connectionURL                 = 'mongodb://127.0.0.1:27017';
        databaseName                  = 'restExample';
        validator                     = require('validator');


mongoose.connect(process.env.DBURI, {
     useNewUrlParser: true, 
     useCreateIndex: true  
});

module.exports = mongoose;

