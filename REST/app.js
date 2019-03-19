const   express     = require('express');
        helmet      = require('helmet');
        bodyParser  = require('body-parser');
                      require('./db/mongoose');
const   userRouter = require('./routers/userRouter');


app = express();
app.use(helmet());
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json());
app.use(userRouter);

const PORT = process.env.PORT

console.log('PORT', process.env.PORT);

if(process.env.NODE_ENV !== 'test'){
    app.listen(PORT);
}

console.log(`Listening at ${PORT}`);

module.exports = app;