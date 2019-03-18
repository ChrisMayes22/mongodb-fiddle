             require('../db/mongoose');
const User = require('../models/users');

// User.findOneAndUpdate({ name: 'Dak' }, { name: 'Sierra' }).then(user => {   -- PROMISE CHAINING
//     console.log(user);
//     return User.findOne({ name: 'Sierra' })
// }).then(user => {
//     console.log(user);
// }).catch(e => {
//     console.log(e);
// });

const makeNewUser = async function(name, email, age, password){ // -- ASYNC/AWAIT
    const user = new User( { name, email, age, password } );
    const saved = await user.save();
    return saved;
}

const findUserByName = async function(name){
    const user = await User.findOne({ name });
    return user;
}

const updateUserName = async function(currentName, newName){
    const user = await User.findOneAndUpdate({ name: currentName }, { name: newName });
    return user;
}

const deleteUserByName = async function(name){
    const deleted = await User.deleteOne({ name });
    return deleted;
}

const memoryWaster = async function(initName, secondName, email, age, password){
    const user = await makeNewUser(initName, email, age, password);
    console.log('User Created. User Info: ', user);
    const find = await findUserByName(user.name);
    console.log(`user ${find.name} was found. User Info: `, find);
    await updateUserName(initName, secondName);
    const updated = await User.findById(user._id);
    console.log(`user updated. Old name: ${user.name}; New name: ${updated.name}`);
    const deleted = await deleteUserByName(secondName);
    console.log(`User with name ${updated.name}, formerly ${user.name} was deleted.`);
    return deleted;
} 


// User.deleteMany({name: 'Fieuline Bardicus'}).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

memoryWaster('Fieuline Bardicus', 'Bardicus Fieuline', 'f@gmail.com', 20, 'fyu2yu2buddy').catch(e => {
    console.log('ERROR:', e)
});


