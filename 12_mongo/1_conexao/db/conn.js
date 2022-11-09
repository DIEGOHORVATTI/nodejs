const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(url);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("div").command({ ping: 1 });
    console.log("Connectado ao servidor");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run();
module.exports = client;
