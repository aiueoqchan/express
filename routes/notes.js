var express = require('express');
var router = express.Router();



//setuzoku jyouhou setting
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://2201110058zu:01252002@cluster0.9e0tp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async (req,  res) => {
  //database collection setting
  const database = client.db('notes');
  const notes = database.collection('notes');

//id ga 1 no document shutoku
  const query = {id: 2 };
  const note = await notes.findOne(query);

res.json(responseObjectDataAll);
})

module.exports = router;
