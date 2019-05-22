// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');
    // deleteMany 
    // db.collection('Todos').deleteMany({text:"had lunch"}).then((result) => {
    //     console.log(result);
    // },(err) =>{
    //     console.log('does not find ',err);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text:"had lunch"}).then((result) => {
    //     console.log(result);
    // },(err) =>{
    //    console.log('unable to find the todo',err);   
    // });

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id : ObjectID('5ce4e21cd77c5e540a5f200d')}).then((result) => {
        console.log(result);
    },(err) => {
        console.log('unable to find the todo',err);
    });

    // client.close();
});