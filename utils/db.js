/*import {
  MongoClient,
} from 'mongodb';*/
const env = require('process');

const { MongoClient, ServerApiVersion } = require('mongodb');
class DBClient {
  constructor() {
    this.username = env.DB_USERNAME || 'root';
    this.password = env.DB_PASSWORD || '';
    this.host = env.DB_HOST || 'localhost';
    this.port = env.DB_PORT || 27017;
    this.dbName = env.DB_DATABASE || 'blognaija';
    const uri = "mongodb+srv://hegeldirkk:IxbLtImLTzCyrx9r@cluster0.ffolp2x.mongodb.net/?retryWrites=true&w=majority";
    MongoClient(`${uri}`, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }).connect().then((client) => {
      this.client = client;
      this.db = this.client.db(this.dbName);
    }).catch((err) => {
      console.error(err.message);
    });
  }

  isAlive() {
    if (this.db) return true;
    return false;
  }

  async nbUsers() {
    const collection = this.db.collection('users');
    return collection.countDocuments();
  }

  async nbFiles() {
    const collection = this.db.collection('files');
    return collection.countDocuments();
  }

  /* add user */
  async checkUsers({email}) {
    const users = this.db.collection('users');
    const check = await users.findOne({ email });
    console.log(check)
    return check;
  }

  // Create a new user document
  async createUser(userData) {
    const collection = dbClient.db.collection('users');
    return collection.insertOne(userData);
  }

  // Read a user document by ID
  async readUser(userId) {
    const collection = dbClient.db.collection('users');
    return collection.findOne({ _id: userId });
  }

  // Update a user document by ID
  async updateUser(userId, userData) {
    const collection = dbClient.db.collection('users');
    return collection.updateOne({ _id: userId }, { $set: userData });
  }


}

const dbClient = new DBClient();

module.exports = dbClient;
