const express=require("express");
const mongoose=require("mongoose");
const app=express()
mongoose.connect("mongodb://localhost:27017/latestdb",{
    useNewUrlParser:true,userUnifiedTopology:true
},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("successully connected")
    }
})
app.listen(3000)



// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017/mydatabase';

// MongoClient.connect(url, function(err, client) {

//     if (err) throw err;
    
//     console.log("Connected successfully to MongoDB");
    
//     // Perform database operations here
    
//     client.close();
    
//     });

//     const db = client.db();

//     const collection = db.collection('mycollection');
    
//     collection.insertOne({ name: 'John Doe', age: 30 }, function(err, result) {
    
//     if (err) throw err;
    
//     console.log("Document inserted successfully");
    
//     });