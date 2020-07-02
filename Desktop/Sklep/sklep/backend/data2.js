var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sklep");
  var myobj = [
   {
    name: 'maczak2',
      email: 'maciejzakrzewski1998@gmail.com',
      password: '1234',
      isAdmin: true,
    
},
  ];
  dbo.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});