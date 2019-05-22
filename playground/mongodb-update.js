// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5ce4ec35d77c5e540a5f237f')
    // },{
    //     $set: {
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5ce3f434af83aa2d40bf1ab2')
    },{
        $set: {
            name:"prashanth"
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});