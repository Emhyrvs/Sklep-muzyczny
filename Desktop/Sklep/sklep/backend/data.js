var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sklep");
  var myobj = [
   {
     
      BandName: 'Mettalica',
      AlbumName: 'Kill Them ALL',
      category: 'METAL',
      image: 'https://5.allegroimg.com/s1024/0cfae1/13797deb401ebb8048f9f31d86d5',
      data: '20-10-1990',
      price: 100,
      count: 200,
      
  },
 
  {
      BandName: 'QUEEN',
      AlbumName: 'Greatest Hits',
      category: 'ROCK',
      image: 'https://queenpoland.files.wordpress.com/2010/06/queen-logo-da-banda-8e4bd1.jpg',
      data: '20-10-2001',
      price: 100,
      count: 20,
    

  },
  
  {
      
      BandName: 'Billie Elish',
      AlbumName: 'KINDA DEPRESION',
      category: 'POP',
      image: 'https://ae01.alicdn.com/kf/HTB1pMG1USrqK1RjSZK9q6xyypXa0.jpg_q50.jpg',
      data: '20-10-2019',
      price: 100,
      
      count: 200,
      
  },
  {
    
    BandName: 'Michel Jackson',
    AlbumName: 'Bad',
    category: 'POP',
    image: 'https://thumbs.img-sprzedajemy.pl/1000x901c/92/73/7f/michael-jackson-badspecial-edition-cd-nowafoliat-cd-gorzow-wielkopolski-81564647.jpg',
    data: '20-10-2011',
    price: 100,
    
    count: 200,
    
},
  ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});