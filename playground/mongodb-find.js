// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // var db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id : new ObjectID('5ce4db66d77c5e540a5f1c66')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // },(err) =>{
    //     console.log('unable to fetch todos',err);
    // }) 

    // var db = client.db('TodoApp');
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    // }, (err) =>{
    //     console.log('unable to fetch todos',err);
    // }) 
    
    var db = client.db('TodoApp');
    db.collection('Users').find({name : 'hithesh'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log('unable to find the todos',err);
    })

    // client.close();
});