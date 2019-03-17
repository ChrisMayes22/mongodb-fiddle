const mongodb           = require('mongodb');
const { MongoClient, ObjectID }   = mongodb;
const connectionURL     = 'mongodb://127.0.0.1:27017';
const databaseName      = 'crudExample';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if(err){
        console.log(err);
    }
    console.log('connected correctly.');

    // const id = new ObjectID(); // NB: This is how you can create your own ObjectID
    // console.log(id.getTimestamp());

    const db = client.db(databaseName);

    const personSchema = {
        name: null,
        age: null
    }

    // const 

    // const CRUD = {
    //     createOne(){

    //     },
    //     createMany(){

    //     },
    //     readOne(){

    //     },
    //     readMany(){

    //     },
    //     updateOne(){

    //     },
    //     updateMany(){
    //         db.collection('users').updateMany({
    //             name: 'Edelin'
    //         },
    //         {
    //             $set: {
    //                 name: 'Edelin Bard'
    //             }
    //         }).then(result => {
    //             console.log(result);
    //         }).catch(err => {
    //             console.log(err);
    //         })

    //     },
    //     deleteOne(){

    //     },
    //     deleteMany(){

    //     }
    // }

    // db.collection('users').deleteOne({
    //     name: 'Edelin Bard'
    // }).then(result => {
    //     console.log(result);
    // }).catch(err => {
    //     console.log(err);
    // });


    // db.collection('users').updateMany({
    //         name: 'Edelin'
    //     },
    //     {
    //         $set: {
    //             name: 'Edelin Bard'
    //         }
    //     }).then(result => {
    //         console.log(result);
    //     }).catch(err => {
    //         console.log(err);
    //     })

    // db.collection('users').updateOne({
    //     _id: ObjectID("5c8d97aecce3b7442489d94e")
    // },
    // {
    //     $set: {
    //         name: 'Fieuline Bard'
    //     }
    // }).then(result => {
    //     console.log(result);
    // }).catch(err => {
    //     console.log(err);
    // });

    // db.collection('users').updateOne(
    //     { 
    //         name: 'Fieuline'
    //     },
    //     {
    //         $set: {
    //             name: 'Fieuline Tabbard'
    //         }
    //     }).then(result => {
    //         console.log(result);
    //     }).catch(err => {
    //         console.log(err);
    //     });
    
    // db.collection('tasks').findOne({ _id: ObjectID("5c8d99ff63b5253410a61973") })
    //     .then(result => {
    //         console.log(result);
    //     }).catch(err => {
    //         console.log(err);
    //     })

    // db.collection('tasks').find({ completed: false }).toArray((err, tasks) => {
    //     if(err) console.log(err);

    //     console.log(tasks);
    // })

    // db.collection('users').insertOne({
    //     name: 'Fieuline',
    //     age: 16
    // }, (err, result) => {
    //     if(err) {
    //         console.log(err)
    //     }
    //     console.log(result.ops);
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Sweet Jane',
    //         age: 34
    //     },
    //     {
    //         name: 'Edelin',
    //         age: 5
    //     }
    // ], (err, result) => {
    //     if(err) {
    //         console.log(err);
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').findOne({ name: 'Fieuline'}, (err, user) => {
    //     if(err) console.log(err);

    //     console.log(user);
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5c8d9564ec20894cc0a65a98")}, //Same result as above but w/ ID 
    // (err, user) => {
    //     if(err) console.log(err);

    //     console.log(user);
    // })

    // db.collection('users').find({ name: 'Fieuline' }).toArray((err, users) => {
    //     console.log(users);
    // }) 
});