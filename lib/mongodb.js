import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://febriqgal:FUKdUUUhivCnGDEG@cluster0.q1ksemt.mongodb.net/test";
const options = {};
const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;
