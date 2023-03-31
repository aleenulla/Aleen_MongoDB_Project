const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

MongoClient.connect(config.url, function(err, client) {
  if (err) throw err;

  const db = client.db(config.dbName);
  console.log("Connected to MongoDB server");
  
  // Perform database operations here
  // ...
  
  client.close();
});
