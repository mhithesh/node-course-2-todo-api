// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // var db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // var db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'hithesh',
    //     age: 20,
    //     location: 'mumbai'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert abc',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});