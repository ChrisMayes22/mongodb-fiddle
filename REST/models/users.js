const   mongoose                      = require('mongoose');
        validator                     = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Input is not an email!')
            }
        }
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.match(/password/i)){
                throw new Error('Password cannot contain password');
            }
        }
    }
});

module.exports = User;