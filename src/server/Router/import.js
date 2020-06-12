var express = require("express");
const { MongoClient } = require("mongodb");
const adminRouter = express.Router();
const url = "mongodb://localhost:27017";
const dbName = "anmeldung";
const user = [
  {
    Name: "younus",
    Pass: "younus", 
    Beschreibung: "Azubi"
  },
  {
    Name: "muller",
    Pass: "muller", 
    Beschreibung: "Azubi"
  }
];

(async function mongo() {
  let Client;
  try {
    client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const response = await db.collection("usertable").insertMany(user);
  } catch (err) {
    console.log(err.stack);
  }
})();