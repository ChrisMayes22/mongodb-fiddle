const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./post');

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer than two characters.'
        },
        required: [true, 'A username is a required.']
    },
    posts: [PostSchema],
    friends: Number
});

UserSchema.virtual('postCount').get(function(){
    return this.posts.length;
})

const User = mongoose.model('user', UserSchema);

module.exports = User;